package com.example.backend.utils;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import com.example.backend.context.TenantContext;

public class SecurityUtils {
    public static String getCurrentUsername() {

        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();

        return authentication.getName();
    }

    public static String getCurrentTenantId() {
        return TenantContext.getTenantId();
    }
}
    


    