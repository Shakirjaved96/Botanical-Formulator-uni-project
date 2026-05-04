package com.botanical.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

/**
 * // OOP PRINCIPLE: ENCAPSULATION - DiagnosisHistory tracks the relationship 
 * // between users and their AI-detected conditions.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "diagnoses_history")
public class DiagnosisHistory {

    @Id
    private String id;

    private String userId;
    private String detectedCondition;
    private double confidence;
    private LocalDateTime timestamp;
    private String imageUrl; // In a real app, this would be a cloud storage URL
}
