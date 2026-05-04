package com.botanical.strategy;

import com.botanical.model.Formulation;

/**
 * // OOP PRINCIPLE: POLYMORPHISM (INTERFACE) - FormulationStrategy defines 
 * // a contract that multiple classes will implement differently.
 */
public interface FormulationStrategy {
    
    /**
     * // Method to be implemented with specific logic for each condition.
     */
    Formulation generateRecipe(String conditionId);

    /**
     * // Identifies which condition this strategy supports.
     */
    String getSupportedCondition();
}
