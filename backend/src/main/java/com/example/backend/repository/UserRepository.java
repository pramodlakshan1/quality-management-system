package com.example.backend.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.backend.entity.User;



public interface UserRepository extends JpaRepository<User, UUID> {

    @Query("""
        SELECT u FROM User u
        JOIN FETCH u.role
        JOIN FETCH u.tenant
        WHERE u.email = :email AND u.tenant.id = :tenantId
    """)
    Optional<User> findByEmailAndTenant_Id(String email, UUID tenantId);

    Optional<User> findByEmail(String email);
}
