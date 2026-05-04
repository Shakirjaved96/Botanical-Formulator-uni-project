package com.botanical.repository;

import com.botanical.model.Formulation;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

public interface FormulationRepository extends MongoRepository<Formulation, String> {
    Optional<Formulation> findByConditionId(String conditionId);
}
