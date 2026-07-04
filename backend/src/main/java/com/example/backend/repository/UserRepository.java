package com.example.backend.repository;

import com.example.backend.entity.Role;
import com.example.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {

    @Query("""
        SELECT u FROM User u
        JOIN FETCH u.role
        JOIN FETCH u.tenant
        WHERE u.email = :email AND u.tenant.id = :tenantId
    """)
    Optional<User> findByEmailAndTenant_Id(String email, UUID tenantId);

    Optional<User> findByEmail(String email);

    // For User Management
    @Query("""
        SELECT u FROM User u
        JOIN FETCH u.role
        JOIN FETCH u.tenant
        WHERE u.tenant.id = :tenantId
        ORDER BY u.firstName ASC, u.lastName ASC
    """)
    List<User> findAllByTenantId(UUID tenantId);

    @Query("""
        SELECT u FROM User u
        JOIN FETCH u.role
        JOIN FETCH u.tenant
        WHERE u.id = :id AND u.tenant.id = :tenantId
    """)
    Optional<User> findByIdAndTenantId(UUID id, UUID tenantId);

    boolean existsByEmailAndTenantId(String email, UUID tenantId);

    @Query("""
        SELECT r FROM Role r
        WHERE r.roleName = :roleName AND r.tenant.id = :tenantId
    """)
    Optional<Role> findByRoleNameAndTenantId(String roleName, UUID tenantId);
}