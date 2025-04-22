package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "feedback")
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "master_name", nullable = false, length = 100)
    private String masterName;

    @Column(name = "service_name", nullable = false, length = 100)
    private String serviceName;

    @Column(name = "user_name", nullable = false)
    private String userName;

    @Column(name = "feedback_text", nullable = false, length = 650)
    private String feedbackText;

    @ColumnDefault("CURRENT_TIMESTAMP")
    @Column(name = "created_at")
    private Instant createdAt;

}