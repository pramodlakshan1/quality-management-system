package com.example.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.LoginRequest;
import com.example.backend.dto.LoginResponce;
import com.example.backend.dto.LogoutRequest;
import com.example.backend.dto.RefreshTokenRequest;
import com.example.backend.service.AuthService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponce> login(
            @Validated @RequestBody LoginRequest request,
            @RequestHeader(value = "X-Tenant-ID", required = false) String tenantHeader  
    ) {
        return ResponseEntity.ok(authService.login(request, tenantHeader));  
    }

    @PostMapping("/refresh")
    public ResponseEntity<LoginResponce> refreshToken(
            @RequestBody RefreshTokenRequest request
    ) {
        return ResponseEntity.ok(authService.refreshToken(request));
    }

   @PostMapping("/logout")
    public ResponseEntity<Void> logout(@RequestBody LogoutRequest request,
                                    @RequestHeader(value = "Authorization", required = false) String authHeader) {

        String accessToken = null;
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            accessToken = authHeader.replace("Bearer ", "").trim();
        }

        System.out.println("Received Refresh Token: " + request.getRefreshToken()); // Debug

        authService.logout(request.getRefreshToken(), accessToken);

        return ResponseEntity.ok().build();
    }

}