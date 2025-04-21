package org.example.backend.dto;


import lombok.*;

@Getter @Setter @AllArgsConstructor
public class UserResponse {
    private Long id;
    private String firstname;
    private String lastname;
    private String email;
}

