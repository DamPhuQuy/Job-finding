package com.jobfinding.app.job.service;

import java.time.Instant;
import java.util.Optional;

import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jobfinding.app.job.dto.JobDetailedResponse;
import com.jobfinding.app.job.dto.JobMapper;
import com.jobfinding.app.job.dto.JobRequestDto;
import com.jobfinding.app.job.dto.JobSummaryResponse;
import com.jobfinding.app.job.entity.ExperienceLevelEntity;
import com.jobfinding.app.job.entity.JobEntity;
import com.jobfinding.app.job.entity.JobSourceEntity;
import com.jobfinding.app.job.entity.JobTypeEntity;
import com.jobfinding.app.job.repository.JobRepository;

@Service
@Transactional(readOnly = true)
public class JobService {
    private final JobRepository jobRepository;

    public JobService(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    // ========== Query methods returning DTOs ==========

    public Slice<JobSummaryResponse> findByTitle(String keyword) {
        return jobRepository.findByTitleContainingIgnoreCase(keyword)
                .map(JobMapper::toSummaryResponseDto);
    }

    public Slice<JobSummaryResponse> findByLocation(String location) {
        return jobRepository.findByLocationContainingIgnoreCase(location)
                .map(JobMapper::toSummaryResponseDto);
    }

    public Slice<JobSummaryResponse> findByCompany(String company) {
        return jobRepository.findByCompanyContainingIgnoreCase(company)
                .map(JobMapper::toSummaryResponseDto);
    }

    public Slice<JobSummaryResponse> findByPostedDateBetween(Instant from, Instant to) {
        return jobRepository.findByPostedDateBetween(from, to)
                .map(JobMapper::toSummaryResponseDto);
    }

    public Slice<JobSummaryResponse> findByJobTypeId(Long jobTypeId) {
        return jobRepository.findByJobTypeId(jobTypeId)
                .map(JobMapper::toSummaryResponseDto);
    }

    public Slice<JobSummaryResponse> findByExperienceLevelId(Long experienceLevelId) {
        return jobRepository.findByExperienceLevelId(experienceLevelId)
                .map(JobMapper::toSummaryResponseDto);
    }

    public Slice<JobSummaryResponse> findBySourceId(Long sourceId) {
        return jobRepository.findBySourceId(sourceId)
                .map(JobMapper::toSummaryResponseDto);
    }

    public Optional<JobSummaryResponse> findSummaryById(Long id) {
        return jobRepository.findById(id).map(JobMapper::toSummaryResponseDto);
    }

    public Optional<JobDetailedResponse> findDetailedById(Long id) {
        return jobRepository.findById(id).map(JobMapper::toDetailedResponse);
    }

    // ========== Entity-level query methods (for internal use) ==========

    public Optional<JobEntity> findJobEntityById(Long id) {
        return jobRepository.findById(id);
    }

    // ========== Create/Update methods with DTOs ==========

    /**
     * Create a new job from JobRequestDto.
     * Note: Related entities (JobType, ExperienceLevel, JobSource) must be set on the Job entity
     * before calling this method, or use createJobWithRelations() method instead.
     *
     * @param requestDto the job request DTO
     * @param jobType the JobType entity
     * @param experienceLevel the ExperienceLevel entity
     * @param jobSource the JobSource entity
     * @return JobSummaryResponse of the created job
     */
    @Transactional
    public JobSummaryResponse createJob(JobRequestDto requestDto, JobTypeEntity jobType,
                                     ExperienceLevelEntity experienceLevel, JobSourceEntity jobSource) {
        JobEntity job = JobMapper.toEntity(requestDto);
        job.setJobType(jobType);
        job.setExperienceLevel(experienceLevel);
        job.setSource(jobSource);

        JobEntity savedJob = jobRepository.save(job);
        return JobMapper.toSummaryResponseDto(savedJob);
    }

    /**
     * Update an existing job from JobRequestDto.
     *
     * @param id the job ID to update
     * @param requestDto the job request DTO with updated data
     * @param jobType the JobType entity (can be null to keep existing)
     * @param experienceLevel the ExperienceLevel entity (can be null to keep existing)
     * @param jobSource the JobSource entity (can be null to keep existing)
     * @return JobSummaryResponse of the updated job, or empty if job not found
     */
    @Transactional
    public Optional<JobSummaryResponse> updateJob(Long id, JobRequestDto requestDto,
                                               JobTypeEntity jobType, ExperienceLevelEntity experienceLevel,
                                               JobSourceEntity jobSource) {
        return jobRepository.findById(id)
                .map(existingJob -> {
                    JobMapper.updateEntityFromDto(existingJob, requestDto);

                    if (jobType != null) {
                        existingJob.setJobType(jobType);
                    }
                    if (experienceLevel != null) {
                        existingJob.setExperienceLevel(experienceLevel);
                    }
                    if (jobSource != null) {
                        existingJob.setSource(jobSource);
                    }

                    JobEntity updatedJob = jobRepository.save(existingJob);
                    return JobMapper.toSummaryResponseDto(updatedJob);
                });
    }

    // ========== Count methods ==========

    public long countByJobType(JobTypeEntity jobType) {
        return jobRepository.countByJobType(jobType);
    }

    public long countByExperienceLevel(ExperienceLevelEntity experienceLevel) {
        return jobRepository.countByExperienceLevel(experienceLevel);
    }

    public long countByCompany(String company) {
        return jobRepository.countByCompanyIgnoreCase(company);
    }

    public long countBySource(JobSourceEntity source) {
        return jobRepository.countBySource(source);
    }

    // Exists methods
    public boolean existsByJobTypeId(Long jobTypeId) {
        return jobRepository.existsByJobTypeId(jobTypeId);
    }

    public boolean existsBySourceId(Long sourceId) {
        return jobRepository.existsBySourceId(sourceId);
    }

    public boolean existsByExperienceLevelId(Long experienceLevelId) {
        return jobRepository.existsByExperienceLevelId(experienceLevelId);
    }

    public boolean existsById(Long id) {
        return jobRepository.existsById(id);
    }

    // ========== Save method (for internal/direct entity manipulation) ==========

    @Transactional
    public JobEntity saveEntity(JobEntity job) {
        return jobRepository.save(job);
    }

    // ========== Delete methods ==========

    @Transactional
    public long deleteByPostedDateBefore(Instant cutoff) {
        return jobRepository.deleteByPostedDateBefore(cutoff);
    }

    @Transactional
    public long deleteBySourceId(Long sourceId) {
        return jobRepository.deleteBySourceId(sourceId);
    }

    @Transactional
    public long deleteByCompany(String company) {
        return jobRepository.deleteByCompanyIgnoreCase(company);
    }

    @Transactional
    public long deleteByJobTypeId(Long jobTypeId) {
        return jobRepository.deleteByJobTypeId(jobTypeId);
    }

    @Transactional
    public void deleteById(Long id) {
        jobRepository.deleteById(id);
    }
}
