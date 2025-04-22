package org.example.backend.controller;

import org.example.backend.dto.BookingDTO;
import org.example.backend.entity.Booking;
import org.example.backend.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:3000") // Allow React frontend
public class BookingController {

    @Autowired
    private BookingService bookingService;

    // Create a new booking
    @PostMapping
    public Booking createBooking(@RequestBody BookingDTO bookingDTO) {
        return bookingService.saveBooking(bookingDTO);
    }

    // Get bookings by email
    @GetMapping("/{email}")
    public List<Booking> getBookingsByEmail(@PathVariable String email) {
        return bookingService.getBookingsByEmail(email);
    }
}
