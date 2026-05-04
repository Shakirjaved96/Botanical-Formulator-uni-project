package com.botanical.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "formulations")
public class Formulation {
    @Id
    private String id;
    private String conditionId;
    private String remedyTitle;
    private List<IngredientUsage> ingredientsUsed;
    private List<String> stepByStepInstructions;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class IngredientUsage {
        private String ingredientName;
        private String exactMeasurement;
    }
}
