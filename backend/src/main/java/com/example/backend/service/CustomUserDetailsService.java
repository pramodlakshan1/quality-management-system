package com.example.backend.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.backend.context.TenantContext;
import com.example.backend.repository.UserRepository;

import lombok.RequiredArgsConstructor;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        
        String tenantIdStr = TenantContext.getTenantId();

        // If tenant is available in context (from header or JWT)
        if (tenantIdStr != null && !tenantIdStr.isEmpty()) {
            try {
                UUID tenantId = UUID.fromString(tenantIdStr);
                return userRepository.findByEmailAndTenant_Id(username, tenantId)
                        .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
            } catch (IllegalArgumentException e) {
                // This handles the case when tenantIdStr is "acme" (subdomain) instead of UUID
                System.err.println("Invalid Tenant ID format: " + tenantIdStr);
            }
        }

        // Fallback: Search by email only (used during token validation)
        return userRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + username));
    }
}