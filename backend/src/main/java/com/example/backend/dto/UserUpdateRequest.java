package com.example.backend.dto;

import lombok.Data;

@Data
public class UserUpdateRequest {
    private String firstName;
    private String lastName;
    private String roleName;
    private Boolean active;
    
}
