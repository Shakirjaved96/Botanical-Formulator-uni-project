package com.botanical.service;

import com.botanical.dto.DiagnosisResponseDTO;
import com.botanical.model.*;
import com.botanical.repository.*;
import com.botanical.strategy.FormulationStrategy;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class DiagnosisService {

    private final UserRepository userRepository;
    private final ConditionRepository conditionRepository;
    private final DiagnosisHistoryRepository historyRepository;
    private final RestTemplate restTemplate;
    
    /**
     * // OOP PRINCIPLE: POLYMORPHISM - Injecting all implementations of FormulationStrategy.
     * // Spring automatically discovers classes like AcneFormulator and DandruffFormulator.
     */
    private final List<FormulationStrategy> formulationStrategies;

    @Value("${python.ai.url:http://localhost:8000}")
    private String pythonAiUrl;

    public DiagnosisResponseDTO diagnoseAndFormulate(String name, String email, int age, String skinType, byte[] imageBytes) {
        
        // 1. ENCAPSULATION: Create and Save User
        User user = userRepository.findByEmail(email).orElse(new User());
        user.setName(name);
        user.setEmail(email);
        user.setAge(age);
        user.setSkinType(skinType);
        user = userRepository.save(user);

        // 2. Call Python AI Microservice
        String base64Image = Base64.getEncoder().encodeToString(imageBytes);
        Map<String, String> payload = new HashMap<>();
        payload.put("image_base64", "data:image/jpeg;base64," + base64Image);

        Map<String, Object> aiResponse;
        try {
            aiResponse = restTemplate.postForObject(pythonAiUrl + "/analyze-image", payload, Map.class);
        } catch (Exception e) {
            throw new RuntimeException("AI Service unreachable: " + e.getMessage());
        }

        if (aiResponse == null || !aiResponse.containsKey("detected_condition")) {
            throw new RuntimeException("AI Analysis failed");
        }

        String conditionName = (String) aiResponse.get("detected_condition");
        Double confidence = (Double) aiResponse.get("confidence");

        // 3. Fetch Condition Details (Inheritance/Abstraction)
        BaseCondition condition = conditionRepository.findByName(conditionName).orElse(null);

        // 4. POLYMORPHISM: Select the correct Formulation Strategy
        Formulation formulation = null;
        if (condition != null) {
            formulation = formulationStrategies.stream()
                    .filter(s -> s.getSupportedCondition().equalsIgnoreCase(conditionName))
                    .findFirst()
                    .map(s -> s.generateRecipe(condition.getId()))
                    .orElse(null);
        }

        // 5. Save History
        DiagnosisHistory history = new DiagnosisHistory();
        history.setUserId(user.getId());
        history.setDetectedCondition(conditionName);
        history.setConfidence(confidence);
        history.setTimestamp(LocalDateTime.now());
        historyRepository.save(history);

        // 6. Return Encapsulated Result
        return new DiagnosisResponseDTO(
                user,
                conditionName,
                confidence,
                condition,
                formulation,
                "Diagnosis completed successfully for " + user.getName()
        );
    }
}
