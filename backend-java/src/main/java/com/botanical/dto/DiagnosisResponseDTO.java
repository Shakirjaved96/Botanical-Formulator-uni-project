package com.botanical.dto;

import com.botanical.model.BaseCondition;
import com.botanical.model.Formulation;
import com.botanical.model.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * // OOP PRINCIPLE: ENCAPSULATION - DiagnosisResponseDTO bundles all data 
 * // required by the frontend into a single, structured object.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class DiagnosisResponseDTO {
    
    private User user;
    private String detectedCondition;
    private Double confidence;
    private BaseCondition conditionDetails;
    private Formulation formulation;
    private String message;
}
