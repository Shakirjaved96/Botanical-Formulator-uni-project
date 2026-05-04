package com.botanical.repository;

import com.botanical.model.Ingredient;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * // OOP PRINCIPLE: ABSTRACTION - Interface for cataloging natural ingredients.
 */
public interface IngredientRepository extends MongoRepository<Ingredient, String> {
}
