package com.botanical.repository;

import com.botanical.model.BaseCondition;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

/**
 * // OOP PRINCIPLE: ABSTRACTION - Interface-based design to abstract database operations.
 */
public interface ConditionRepository extends MongoRepository<BaseCondition, String> {
    Optional<BaseCondition> findByName(String name);
}
