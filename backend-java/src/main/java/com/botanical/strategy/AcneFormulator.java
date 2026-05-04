package com.botanical.strategy;

import com.botanical.model.Formulation;
import com.botanical.repository.FormulationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

/**
 * // OOP PRINCIPLE: POLYMORPHISM - AcneFormulator provides a specific 
 * // implementation of the generateRecipe method for acne conditions.
 */
@Component
@RequiredArgsConstructor
public class AcneFormulator implements FormulationStrategy {

    private final FormulationRepository formulationRepository;

    @Override
    public String getSupportedCondition() {
        return "Acne Breakout";
    }

    /**
     * // OOP PRINCIPLE: POLYMORPHISM - This class overrides the generateRecipe 
     * // method to specifically query and handle Acne formulations.
     */
    @Override
    public Formulation generateRecipe(String conditionId) {
        return formulationRepository.findByConditionId(conditionId)
                .orElse(null);
    }
}
