package com.example.backend.service;

import java.util.UUID;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.backend.context.TenantContext;
import com.example.backend.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

     private final UserRepository userRepository;

    @Override
public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        String tenantIdStr = TenantContext.getTenantId();

        if (tenantIdStr != null && !tenantIdStr.isEmpty()) {
            UUID tenantId = UUID.fromString(tenantIdStr);
            return userRepository.findByEmailAndTenant_Id(username, tenantId)
                    .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + username));
        }

        // Fallback (used during token validation where tenant is already in JWT)
        return userRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + username));
    }
}
