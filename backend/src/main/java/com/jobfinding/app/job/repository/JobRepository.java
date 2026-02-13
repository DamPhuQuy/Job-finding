package com.jobfinding.app.job.repository;

import java.time.Instant;

import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jobfinding.app.job.entity.ExperienceLevelEntity;
import com.jobfinding.app.job.entity.JobEntity;
import com.jobfinding.app.job.entity.JobSourceEntity;
import com.jobfinding.app.job.entity.JobTypeEntity;

/*
 * jpa methods syntax:
 * [prefix][distinct]By[Property][operation][And/Or][Property][operation]...
 */

@Repository
public interface JobRepository extends JpaRepository<JobEntity, Long> {

    /*
     * SQL:
     SELECT * FROM jobs WHERE title LIKE %:keyword%;
     */
    Slice<JobEntity> findByTitleContainingIgnoreCase(String keyword);

    /*
     * SQL:
     SELECT * FROM jobs WHERE location LIKE %:location%;
     */
    Slice<JobEntity> findByLocationContainingIgnoreCase(String location);

    /*
     * SQL:
     SELECT * FROM jobs WHERE company LIKE %:company%;
     */
    Slice<JobEntity> findByCompanyContainingIgnoreCase(String company);

    /*
     * SQL:
     SELECT * FROM jobs WHERE posted_date BETWEEN :from AND :to;
     */
    Slice<JobEntity> findByPostedDateBetween(Instant from, Instant to);

    /*
     * SQL:
     SELECT * FROM jobs WHERE job_type_id = :jobTypeId;
     */
    Slice<JobEntity> findByJobTypeId(Long jobTypeId);

    /*
     * SQL:
     SELECT * FROM jobs WHERE experience_level_id = :experienceLevelId;
     */
    Slice<JobEntity> findByExperienceLevelId(Long experienceLevelId);

    /*
     * SQL:
     SELECT * FROM jobs WHERE source_id = :sourceId;
     */
    Slice<JobEntity> findBySourceId(Long sourceId);

    /*
     * SQL:
     INSERT INTO jobs (...) VALUES (...);
     */
    <S extends JobEntity> S save(S entity);

    /*
             * SQL:
             SELECT COUNT(*) FROM jobs WHERE job_type_id = :jobType.id;
             */
    long countByJobType(JobTypeEntity jobType);

    /*
     * SQL:
     SELECT COUNT(*) FROM jobs WHERE experience_level_id = :experienceLevel.id;
     */
    long countByExperienceLevel(ExperienceLevelEntity experienceLevel);

    /*
     * SQL:
     SELECT COUNT(*) FROM jobs WHERE LOWER(company) = LOWER(:company);
     */
    long countByCompanyIgnoreCase(String company);

    /*
     * SQL:
     SELECT COUNT(*) FROM jobs WHERE source_id = :source.id;
     */
    long countBySource(JobSourceEntity source);

    /*
     * SQL:
     SELECT EXISTS(SELECT 1 FROM jobs WHERE job_type_id = :jobTypeId);
     */
    boolean existsByJobTypeId(Long jobTypeId);

    /*
     * SQL:
     SELECT EXISTS(SELECT 1 FROM jobs WHERE source_id = :sourceId);
     */
    boolean existsBySourceId(Long sourceId);

    /*
     * SQL:
     SELECT EXISTS(SELECT 1 FROM jobs WHERE experience_level_id = :experienceLevelId);
     */
    boolean existsByExperienceLevelId(Long experienceLevelId);

    /*
     * SQL:
     DELETE FROM jobs WHERE posted_date < :cutoff;
     */
    long deleteByPostedDateBefore(Instant cutoff);

    /*
     * SQL:
     DELETE FROM jobs WHERE source_id = :sourceId;
     */
    long deleteBySourceId(Long sourceId);

    /*
     * SQL:
     DELETE FROM jobs WHERE LOWER(company) = LOWER(:company);
     */
    long deleteByCompanyIgnoreCase(String company);

    /*
     * SQL:
     DELETE FROM jobs WHERE job_type_id = :jobTypeId;
     */
    long deleteByJobTypeId(Long jobTypeId);

}
