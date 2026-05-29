package com.example.backend.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.entity.Tenant;

public interface TenantRepository extends JpaRepository<Tenant, UUID> {
    Optional<Tenant> findBySubdomain(String subdomain);
}
