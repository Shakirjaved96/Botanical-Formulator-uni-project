package com.botanical.repository;

import com.botanical.model.DiagnosisHistory;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

/**
 * // OOP PRINCIPLE: ABSTRACTION - Interface for managing diagnosis history records.
 */
public interface DiagnosisHistoryRepository extends MongoRepository<DiagnosisHistory, String> {
    List<DiagnosisHistory> findByUserId(String userId);
}
