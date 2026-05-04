package com.botanical.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * // OOP PRINCIPLE: INHERITANCE - SkinCondition extends BaseCondition.
 * // It inherits fields like id, name, and description from the parent class.
 */
@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Document(collection = "conditions")
public class SkinCondition extends BaseCondition {

    private String skinTypeAffinity; // e.g., "Oily", "Dry"

    /**
     * // OOP PRINCIPLE: POLYMORPHISM - Overriding the getCategory() method
     * // to provide a specific implementation for skin conditions.
     */
    @Override
    public String getCategory() {
        return "skin";
    }

    public SkinCondition(String id, String name, String description, String skinTypeAffinity) {
        super(id, name, description);
        this.skinTypeAffinity = skinTypeAffinity;
    }
}
