package com.jobfinding.app.job.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jobfinding.app.job.entity.JobTypeEntity;

/**
 * Repository interface for JobType entity.
 * Provides CRUD operations and custom queries for job types.
 */
@Repository
public interface JobTypeRepository extends JpaRepository<JobTypeEntity, Long> {

    /**
     * Find a job type by its name (case-insensitive).
     *
     * @param name the job type name
     * @return Optional containing the JobType if found
     */
    Optional<JobTypeEntity> findByNameIgnoreCase(String name);

    /**
     * Check if a job type with the given name exists (case-insensitive).
     *
     * @param name the job type name
     * @return true if exists, false otherwise
     */
    boolean existsByNameIgnoreCase(String name);
}

