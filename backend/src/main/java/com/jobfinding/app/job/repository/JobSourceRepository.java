package com.jobfinding.app.job.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jobfinding.app.job.entity.JobSource;

/**
 * Repository interface for JobSource entity.
 * Provides CRUD operations and custom queries for job sources.
 */
@Repository
public interface JobSourceRepository extends JpaRepository<JobSource, Long> {

    /**
     * Find a job source by its name (case-insensitive).
     *
     * @param name the job source name
     * @return Optional containing the JobSource if found
     */
    Optional<JobSource> findByNameIgnoreCase(String name);

    /**
     * Check if a job source with the given name exists (case-insensitive).
     *
     * @param name the job source name
     * @return true if exists, false otherwise
     */
    boolean existsByNameIgnoreCase(String name);

    /**
     * Find a job source by its website URL.
     *
     * @param websiteUrl the website URL
     * @return Optional containing the JobSource if found
     */
    Optional<JobSource> findByWebsiteUrl(String websiteUrl);
}

