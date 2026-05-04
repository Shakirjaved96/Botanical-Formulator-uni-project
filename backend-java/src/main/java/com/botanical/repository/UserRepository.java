package com.botanical.repository;

import com.botanical.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

/**
 * // OOP PRINCIPLE: ABSTRACTION - UserRepository is an interface that abstracts 
 * // the data access logic. Spring Data MongoDB provides the implementation at runtime.
 */
public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByEmail(String email);
}
