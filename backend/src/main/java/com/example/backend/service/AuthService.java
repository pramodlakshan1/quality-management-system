package com.example.backend.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.backend.context.TenantContext;
import com.example.backend.dto.LoginRequest;
import com.example.backend.dto.LoginResponce;
import com.example.backend.dto.RefreshTokenRequest;
import com.example.backend.entity.RefreshToken;
import com.example.backend.entity.Tenant;
import com.example.backend.entity.User;
import com.example.backend.exception.BusinessException;
import com.example.backend.exception.InvalidCredentialsException;
import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.exception.TenantNotFoundException;
import com.example.backend.repository.RefreshTokenRepository;
import com.example.backend.repository.TenantRepository;
import com.example.backend.repository.UserRepository;
import com.example.backend.utils.SecurityUtils;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {
    
    private final UserRepository userRepository;
    private final TenantRepository tenantRepository;
    private final JwtService jwtService;
    private final RefreshTokenRepository refreshTokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenBlacklistService tokenBlacklistService;


    public LoginResponce login(LoginRequest request, String tenantFromHeader) {  
        
        String tenantSubdomain = (tenantFromHeader != null && !tenantFromHeader.isEmpty()) 
            ? tenantFromHeader 
            : request.getTenant();
        
        if (tenantSubdomain == null || tenantSubdomain.isEmpty()) {
            throw new BusinessException("Tenant is required (X-Tenant-ID header or tenant field in body)");
        }
        
        // Find tenant
        Tenant tenant = tenantRepository.findBySubdomain(tenantSubdomain)
                .orElseThrow(() -> new TenantNotFoundException("Tenant not found: " + tenantSubdomain));

        if (!tenant.isActive()) {
            throw new BusinessException("Tenant is inactive");
        }

        // Find user within tenant
        User user = userRepository
            .findByEmailAndTenant_Id(request.getEmail(), tenant.getId())
            .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + request.getEmail()));
        
        // Validate password
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new InvalidCredentialsException("Invalid email or password");
}
        if (!user.isActive()) {
            throw new BusinessException("User is inactive. Please contact admin.");
        }

        // Generate tokens
        String token = jwtService.generateToken(
                user,
                tenant.getId().toString(),
                user.getRole().getSystemRole(),
                tenant.getPlanType()
        );

        String refreshToken = jwtService.generateRefreshToken(user);

        // Save refresh token
        RefreshToken refreshTokenEntity = RefreshToken.builder()
                .token(refreshToken)
                .user(user)
                .expiryDate(LocalDateTime.now().plusDays(7))
                .revoked(false)
                .build();

        refreshTokenRepository.save(refreshTokenEntity);

        // Build response
        return LoginResponce.builder()
                .token(token)
                .refreshToken(refreshToken)
                .username(user.getEmail())  
                .role(user.getRole().getRoleName())
                .tenant(tenant.getCompanyName())
                .companyLogo(tenant.getLogo())
                .plan(tenant.getPlanType())
                .build();
    }

    public LoginResponce refreshToken(RefreshTokenRequest request) {
        RefreshToken storedToken = refreshTokenRepository.findByToken(request.getRefreshToken())
                .orElseThrow(() -> new ResourceNotFoundException("Invalid refresh token"));

        if (storedToken.isRevoked()) {
            throw new BusinessException("Refresh token has been revoked");
        }

        if (storedToken.getExpiryDate().isBefore(LocalDateTime.now())) {
            throw new BusinessException("Refresh token has expired");
        }

        User user = storedToken.getUser();

        String accessToken = jwtService.generateToken(
                user,
                user.getTenant().getId().toString(),
                user.getRole().getSystemRole(),
                user.getTenant().getPlanType()
        );

        return LoginResponce.builder()
                .token(accessToken)
                .refreshToken(request.getRefreshToken())
                .username(user.getEmail())
                .role(user.getRole().getRoleName())
                .tenant(user.getTenant().getCompanyName())
                .companyLogo(user.getTenant().getLogo())
                .plan(user.getTenant().getPlanType())
                .build();
    }

    @Transactional
    public void logout(String refreshTokenStr, String accessToken) {

        System.out.println("=== LOGOUT SERVICE STARTED ===");
        System.out.println("Refresh Token: " + (refreshTokenStr != null ? refreshTokenStr.substring(0, 30) + "..." : "null"));

        if (refreshTokenStr == null || refreshTokenStr.trim().isEmpty()) {
            throw new BusinessException("Refresh token is required");
        }

        // Find refresh token
        RefreshToken refreshToken = refreshTokenRepository.findByToken(refreshTokenStr)
                .orElseThrow(() -> new ResourceNotFoundException("Invalid refresh token"));

        User user = refreshToken.getUser();
        if (user == null || user.getTenant() == null) {
            throw new ResourceNotFoundException("User or tenant not found for token");
        }

        String userTenantUUID = user.getTenant().getId().toString();
        String userTenantSubdomain = user.getTenant().getSubdomain();

        String currentTenantId = SecurityUtils.getCurrentTenantId();

        System.out.println("User Tenant UUID: " + userTenantUUID);
        System.out.println("User Tenant Subdomain: " + userTenantSubdomain);
        System.out.println("Current Context Tenant ID: " + currentTenantId);

        boolean tenantMatch = false;

        if (currentTenantId == null) {
            tenantMatch = true; 
        } else if (currentTenantId.equals(userTenantUUID) || 
                currentTenantId.equals(userTenantSubdomain)) {
            tenantMatch = true;
        }

        if (!tenantMatch) {
            throw new BusinessException("Unauthorized logout attempt - tenant mismatch");
        }

        // Revoke this token
        refreshToken.setRevoked(true);
        refreshTokenRepository.save(refreshToken);

        // Revoke all tokens of this user
        revokeAllUserTokens(user);

        // Blacklist access token if available
        if (accessToken != null && tokenBlacklistService != null) {
            try {
                tokenBlacklistService.blacklistAccessToken(accessToken, 3600000L);
            } catch (Exception e) {
                System.err.println("Warning: Failed to blacklist access token: " + e.getMessage());
            }
        }

        System.out.println("🔒 High-security logout completed for user: " + user.getEmail());
    }

    private void revokeAllUserTokens(User user) {
        if (user == null) return;
        
        List<RefreshToken> tokens = refreshTokenRepository.findAllByUserId(user.getId());
        tokens.forEach(token -> token.setRevoked(true));
        refreshTokenRepository.saveAll(tokens);
    }
    
}