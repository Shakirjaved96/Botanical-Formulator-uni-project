package com.botanical.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * // OOP PRINCIPLE: INHERITANCE - HairCondition extends BaseCondition.
 * // It reuses the foundational code from BaseCondition.
 */
@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Document(collection = "conditions")
public class HairCondition extends BaseCondition {

    private String scalpType; // e.g., "Flaky", "Greasy"

    /**
     * // OOP PRINCIPLE: POLYMORPHISM - Providing a specific category string
     * // for hair-related conditions through method overriding.
     */
    @Override
    public String getCategory() {
        return "hair";
    }

    public HairCondition(String id, String name, String description, String scalpType) {
        super(id, name, description);
        this.scalpType = scalpType;
    }
}
