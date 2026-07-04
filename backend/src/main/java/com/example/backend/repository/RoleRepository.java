package com.example.backend.repository;

import com.example.backend.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;
import java.util.UUID;

public interface RoleRepository extends JpaRepository<Role, UUID> {

    /**
     * Find role by name within a specific tenant
     * This is important for multi-tenancy
     */
    @Query("""
        SELECT r FROM Role r
        WHERE r.roleName = :roleName 
        AND r.tenant.id = :tenantId
    """)
    Optional<Role> findByRoleNameAndTenantId(String roleName, UUID tenantId);

    /**
     * Find role by system role (ROLE_ADMIN, ROLE_USER, etc.)
     */
    @Query("""
        SELECT r FROM Role r
        WHERE r.systemRole = :systemRole 
        AND r.tenant.id = :tenantId
    """)
    Optional<Role> findBySystemRoleAndTenantId(String systemRole, UUID tenantId);

    /**
     * Check if role exists in tenant
     */
    boolean existsByRoleNameAndTenantId(String roleName, UUID tenantId);
}