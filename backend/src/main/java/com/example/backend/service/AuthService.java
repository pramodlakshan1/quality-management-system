package com.example.backend.service;

import java.time.LocalDateTime;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.backend.dto.LoginRequest;
import com.example.backend.dto.LoginResponce;
import com.example.backend.dto.RefreshTokenRequest;
import com.example.backend.entity.RefreshToken;
import com.example.backend.entity.Tenant;
import com.example.backend.entity.User;
import com.example.backend.repository.RefreshTokenRepository;
import com.example.backend.repository.TenantRepository;
import com.example.backend.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {
    
    private final UserRepository userRepository;
    private final TenantRepository tenantRepository;
    private final JwtService jwtService;
    private final RefreshTokenRepository refreshTokenRepository;
    private final PasswordEncoder passwordEncoder;

    public LoginResponce login(LoginRequest request, String tenantFromHeader) {  
        
        String tenantSubdomain = (tenantFromHeader != null && !tenantFromHeader.isEmpty()) 
            ? tenantFromHeader 
            : request.getTenant();
        
        if (tenantSubdomain == null || tenantSubdomain.isEmpty()) {
            throw new RuntimeException("Tenant is required (X-Tenant-ID header or tenant field in body)");
        }
        
        // Find tenant
        Tenant tenant = tenantRepository.findBySubdomain(tenantSubdomain)
                .orElseThrow(() -> new RuntimeException("Tenant not found: " + tenantSubdomain));

        if (!tenant.isActive()) {
            throw new RuntimeException("Tenant is inactive");
        }

        User user = userRepository
        .findByEmailAndTenant_Id(request.getEmail(), tenant.getId())
        .orElseThrow(() -> new RuntimeException("User not found"));
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
        throw new RuntimeException("Invalid credentials");
}
        if (!user.isActive()) {
            throw new RuntimeException("User is inactive");
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
                .username(user.getEmail())  // Using email as username
                .role(user.getRole().getRoleName())
                .tenant(tenant.getCompanyName())
                .companyLogo(tenant.getLogo())
                .plan(tenant.getPlanType())
                .build();
    }

    public LoginResponce refreshToken(RefreshTokenRequest request) {
        RefreshToken storedToken = refreshTokenRepository.findByToken(request.getRefreshToken())
                .orElseThrow(() -> new RuntimeException("Invalid refresh token"));

        if (storedToken.isRevoked()) {
            throw new RuntimeException("Refresh token has been revoked");
        }

        if (storedToken.getExpiryDate().isBefore(LocalDateTime.now())) {
            throw new RuntimeException("Refresh token has expired");
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
}