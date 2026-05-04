package com.botanical.repository;

import com.botanical.model.Condition;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

public interface ConditionRepository extends MongoRepository<Condition, String> {
    Optional<Condition> findByName(String name);
}
