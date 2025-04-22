package org.example.backend.controller;

import org.example.backend.dto.FeedbackDTO;
import org.example.backend.entity.Feedback;
import org.example.backend.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/feedback")
@CrossOrigin(origins = "http://localhost:3000") // allow frontend to connect
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    // POST: Save new feedback
    @PostMapping
    public ResponseEntity<Feedback> submitFeedback(@RequestBody FeedbackDTO feedbackDto) {
        Feedback saved = feedbackService.saveFeedback(feedbackDto);
        return ResponseEntity.ok(saved);
    }

    // GET: Retrieve feedback for a specific master
    @GetMapping("/by-master")
    public ResponseEntity<List<Feedback>> getFeedbackByMaster(@RequestParam String masterName) {
        System.out.println("Fetching feedback for master: " + masterName); // TEMP LOG for debugging
        List<Feedback> feedbackList = feedbackService.getFeedbackByMasterName(masterName);
        return ResponseEntity.ok(feedbackList);
    }
}
