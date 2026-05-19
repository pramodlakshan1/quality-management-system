package com.example.backend.dto;

import lombok.Data;

@Data
public class LoginResponce {
    private String token;
    private string username;
    private String role;
    private String companyName;
    
}
