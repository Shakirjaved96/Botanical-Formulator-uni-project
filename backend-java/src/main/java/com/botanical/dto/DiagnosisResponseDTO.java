package com.botanical.dto;

import com.botanical.model.Condition;
import com.botanical.model.Formulation;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DiagnosisResponseDTO {
    private String detectedCondition;
    private Double confidence;
    private Condition conditionDetails;
    private Formulation formulation;
}
