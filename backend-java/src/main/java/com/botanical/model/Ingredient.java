package com.botanical.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

/**
 * // OOP PRINCIPLE: ENCAPSULATION - Ingredient properties are bundled together.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "ingredients")
public class Ingredient {
    
    @Id
    private String id;

    /**
     * // OOP PRINCIPLE: ENCAPSULATION - Private state accessible via public methods.
     */
    private String name;
    private List<String> properties;
    private String preparationMethod;
}
