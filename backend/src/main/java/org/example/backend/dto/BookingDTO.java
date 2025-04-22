package org.example.backend.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;
@Getter
@Setter
public class BookingDTO {
    private String gender;
    private String service;
    private String master;
    private LocalDate date;
    private LocalTime time;
    private String email;

    // Getters and setters
}
