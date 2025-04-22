package org.example.backend.service;

import org.example.backend.dto.FeedbackDTO;
import org.example.backend.entity.Feedback;
import org.example.backend.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    // Existing logic: Save new feedback
    public Feedback saveFeedback(FeedbackDTO dto) {
        Feedback feedback = new Feedback();
        feedback.setMasterName(dto.getMasterName());
        feedback.setServiceName(dto.getServiceName());
        feedback.setUserName(dto.getUserName());
        feedback.setFeedbackText(dto.getFeedbackText());
        feedback.setCreatedAt(Instant.now());

        return feedbackRepository.save(feedback);
    }

    // New method: Get feedback by master name
    public List<Feedback> getFeedbackByMasterName(String masterName) {
        return feedbackRepository.findByMasterName(masterName);
    }
}
