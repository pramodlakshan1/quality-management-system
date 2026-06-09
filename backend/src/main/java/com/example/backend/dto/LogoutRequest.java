package com.example.backend.dto;

import lombok.Data;

@Data
public class LogoutRequest {
    private String refreshToken;
}
