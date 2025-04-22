package org.example.backend.repository;

import org.example.backend.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByEmail(String email); // Custom method to find bookings by email
}
