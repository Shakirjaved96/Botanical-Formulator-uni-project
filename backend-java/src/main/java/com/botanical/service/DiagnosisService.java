package com.botanical.service;

import com.botanical.dto.DiagnosisResponseDTO;
import com.botanical.model.Condition;
import com.botanical.model.Formulation;
import com.botanical.repository.ConditionRepository;
import com.botanical.repository.FormulationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class DiagnosisService {

    private final ConditionRepository conditionRepository;
    private final FormulationRepository formulationRepository;
    private final RestTemplate restTemplate;

    @Value("${python.ai.url:http://localhost:8000}")
    private String pythonAiUrl;

    public DiagnosisResponseDTO diagnose(byte[] imageBytes) {
        // 1. Prepare payload for Python AI
        String base64Image = Base64.getEncoder().encodeToString(imageBytes);
        Map<String, String> payload = new HashMap<>();
        payload.put("image_base64", "data:image/jpeg;base64," + base64Image);

        // 2. Call Python AI microservice
        Map<String, Object> aiResponse = restTemplate.postForObject(
                pythonAiUrl + "/analyze-image",
                payload,
                Map.class
        );

        if (aiResponse == null || !aiResponse.containsKey("detected_condition")) {
            throw new RuntimeException("Failed to get diagnosis from AI service");
        }

        String conditionName = (String) aiResponse.get("detected_condition");
        Double confidence = (Double) aiResponse.get("confidence");

        // 3. Fetch details from MongoDB
        Condition condition = conditionRepository.findByName(conditionName)
                .orElse(null);

        Formulation formulation = null;
        if (condition != null) {
            formulation = formulationRepository.findByConditionId(condition.getId())
                    .orElse(null);
        }

        // 4. Build Response DTO
        return new DiagnosisResponseDTO(
                conditionName,
                confidence,
                condition,
                formulation
        );
    }
}
