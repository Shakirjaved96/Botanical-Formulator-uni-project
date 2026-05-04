package com.botanical.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * // OOP PRINCIPLE: ENCAPSULATION - User data is protected within this class.
 * // Fields are private, and access is controlled through public methods.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "users")
public class User {

    @Id
    private String id;

    /**
     * // OOP PRINCIPLE: ENCAPSULATION - Private fields ensure that the data 
     * // cannot be modified directly from outside the class.
     */
    private String name;
    private String email;
    private int age;
    private String skinType; // Oily, Dry, Combination, Normal
}
