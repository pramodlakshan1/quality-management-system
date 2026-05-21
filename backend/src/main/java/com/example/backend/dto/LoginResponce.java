package com.example.backend.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class LoginResponce {
    private String token;
    private String username;
    private String role;
    private String companyName;
    private String companyLogo;
}
