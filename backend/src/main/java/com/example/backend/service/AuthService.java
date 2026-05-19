package com.example.backend.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import com.example.backend.dto.LoginRequest;
import com.example.backend.dto.LoginResponce;
import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {
    
    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public LoginResponce login (LoginRequest request){
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.getUsername(),
                request.getPassword()
            )
        );
        User user = userRepository.findByUsername(request.getUsername()).orElseThrow();
        String token = jwtService.generateToken(
            user,
            user.getCompany().getId().toString(),
            user.getRole().name()
        );
        return LoginResponce.builder()
                .token(token)
                .username(user.getUserName())
                .role(user.getRole().name())
                .companyName(user.getCompany().getCompanyName())
                .companyLogo(user.getCompany().getLogo())
                .build();
    }
}
