package com.jobfinding.app.job.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jobfinding.app.job.entity.ExperienceLevelEntity;

/**
 * Repository interface for ExperienceLevel entity.
 * Provides CRUD operations and custom queries for experience levels.
 */
@Repository
public interface ExperienceLevelRepository extends JpaRepository<ExperienceLevelEntity, Long> {

    /**
     * Find an experience level by its name (case-insensitive).
     *
     * @param name the experience level name
     * @return Optional containing the ExperienceLevel if found
     */
    Optional<ExperienceLevelEntity> findByNameIgnoreCase(String name);

    /**
     * Check if an experience level with the given name exists (case-insensitive).
     *
     * @param name the experience level name
     * @return true if exists, false otherwise
     */
    boolean existsByNameIgnoreCase(String name);
}

