package com.botanical.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

/**
 * // OOP PRINCIPLE: ABSTRACTION - BaseCondition is an abstract class that cannot be instantiated.
 * // It defines the common properties for all botanical conditions (Skin or Hair).
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public abstract class BaseCondition {

    /**
     * // OOP PRINCIPLE: ENCAPSULATION - Protecting the ID field with private access.
     * // Access is provided via public getters and setters (Lombok @Data).
     */
    @Id
    private String id;

    private String name;
    private String description;
    
    // Abstract method to be implemented by subclasses
    public abstract String getCategory();
}
