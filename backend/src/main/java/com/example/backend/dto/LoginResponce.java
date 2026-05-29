package com.example.backend.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class LoginResponce {
    private String token;

    private String refreshToken;

    private String username;

    private String role;

    private String tenant;

    private String companyLogo;

    private String plan;
}
