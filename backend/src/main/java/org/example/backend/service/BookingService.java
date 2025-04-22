package org.example.backend.service;

import org.example.backend.dto.BookingDTO;
import org.example.backend.entity.Booking;
import org.example.backend.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    public Booking saveBooking(BookingDTO bookingDTO) {
        Booking booking = new Booking();
        booking.setGender(bookingDTO.getGender());
        booking.setService(bookingDTO.getService());
        booking.setMaster(bookingDTO.getMaster());
        booking.setDate(bookingDTO.getDate());
        booking.setTime(bookingDTO.getTime());
        booking.setEmail(bookingDTO.getEmail());
        return bookingRepository.save(booking);
    }

    // Get bookings by email
    public List<Booking> getBookingsByEmail(String email) {
        return bookingRepository.findByEmail(email);
    }
}
