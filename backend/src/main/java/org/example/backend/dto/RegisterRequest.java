package org.example.backend.dto;


import lombok.*;

@Getter @Setter
public class RegisterRequest {
    private String firstname;
    private String lastname;
    private String email;
    private String password;
}

