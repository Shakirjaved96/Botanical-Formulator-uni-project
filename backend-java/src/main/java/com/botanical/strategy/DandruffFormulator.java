package com.botanical.strategy;

import com.botanical.model.Formulation;
import com.botanical.repository.FormulationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

/**
 * // OOP PRINCIPLE: POLYMORPHISM - DandruffFormulator implements the 
 * // FormulationStrategy interface for hair-related conditions.
 */
@Component
@RequiredArgsConstructor
public class DandruffFormulator implements FormulationStrategy {

    private final FormulationRepository formulationRepository;

    @Override
    public String getSupportedCondition() {
        return "Severe Dandruff";
    }

    /**
     * // OOP PRINCIPLE: POLYMORPHISM - Providing dandruff-specific recipe logic.
     */
    @Override
    public Formulation generateRecipe(String conditionId) {
        return formulationRepository.findByConditionId(conditionId)
                .orElse(null);
    }
}
