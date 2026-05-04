package com.botanical.repository;

import com.botanical.model.Ingredient;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IngredientRepository extends MongoRepository<Ingredient, String> {
}
