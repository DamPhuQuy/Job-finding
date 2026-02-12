package com.jobfinding.app.job.repository;

import java.time.Instant;

import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jobfinding.app.job.entity.ExperienceLevel;
import com.jobfinding.app.job.entity.Job;
import com.jobfinding.app.job.entity.JobSource;
import com.jobfinding.app.job.entity.JobType;

/*
 * jpa methods syntax:
 * [prefix][distinct]By[Property][operation][And/Or][Property][operation]...
 */

@Repository
public interface JobRepository extends JpaRepository<Job, Long> {

    /*
     * SQL:
     SELECT * FROM jobs WHERE title LIKE %:keyword%;
     */
    Slice<Job> findByTitleContainingIgnoreCase(String keyword);

    /*
     * SQL:
     SELECT * FROM jobs WHERE location LIKE %:location%;
     */
    Slice<Job> findByLocationContainingIgnoreCase(String location);

    /*
     * SQL:
     SELECT * FROM jobs WHERE company LIKE %:company%;
     */
    Slice<Job> findByCompanyContainingIgnoreCase(String company);

    /*
     * SQL:
     SELECT * FROM jobs WHERE posted_date BETWEEN :from AND :to;
     */
    Slice<Job> findByPostedDateBetween(Instant from, Instant to);

    /*
     * SQL:
     SELECT * FROM jobs WHERE job_type_id = :jobTypeId;
     */
    Slice<Job> findByJobTypeId(Long jobTypeId);

    /*
     * SQL:
     SELECT * FROM jobs WHERE experience_level_id = :experienceLevelId;
     */
    Slice<Job> findByExperienceLevelId(Long experienceLevelId);

    /*
     * SQL:
     SELECT * FROM jobs WHERE source_id = :sourceId;
     */
    Slice<Job> findBySourceId(Long sourceId);

    /*
     * SQL:
     INSERT INTO jobs (...) VALUES (...);
     */
    <S extends Job> S save(S entity);

    /*
             * SQL:
             SELECT COUNT(*) FROM jobs WHERE job_type_id = :jobType.id;
             */
    long countByJobType(JobType jobType);

    /*
     * SQL:
     SELECT COUNT(*) FROM jobs WHERE experience_level_id = :experienceLevel.id;
     */
    long countByExperienceLevel(ExperienceLevel experienceLevel);

    /*
     * SQL:
     SELECT COUNT(*) FROM jobs WHERE LOWER(company) = LOWER(:company);
     */
    long countByCompanyIgnoreCase(String company);

    /*
     * SQL:
     SELECT COUNT(*) FROM jobs WHERE source_id = :source.id;
     */
    long countBySource(JobSource source);

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
