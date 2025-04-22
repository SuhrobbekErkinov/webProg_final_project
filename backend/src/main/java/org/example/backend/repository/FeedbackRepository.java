package org.example.backend.repository;

import org.example.backend.entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FeedbackRepository extends JpaRepository<Feedback, Integer> {

    // NEW: Fetch feedbacks by master name
    List<Feedback> findByMasterName(String masterName);
}
