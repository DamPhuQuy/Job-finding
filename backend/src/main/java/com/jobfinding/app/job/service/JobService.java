package com.jobfinding.app.job.service;

import java.time.Instant;
import java.util.Optional;

import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jobfinding.app.job.dto.JobMapper;
import com.jobfinding.app.job.dto.JobRequestDto;
import com.jobfinding.app.job.dto.JobResponseDto;
import com.jobfinding.app.job.entity.ExperienceLevel;
import com.jobfinding.app.job.entity.Job;
import com.jobfinding.app.job.entity.JobSource;
import com.jobfinding.app.job.entity.JobType;
import com.jobfinding.app.job.repository.JobRepository;

@Service
@Transactional(readOnly = true)
public class JobService {
    private final JobRepository jobRepository;

    public JobService(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    // ========== Query methods returning DTOs ==========

    public Slice<JobResponseDto> findByTitle(String keyword) {
        return jobRepository.findByTitleContainingIgnoreCase(keyword)
                .map(JobMapper::toResponseDto);
    }

    public Slice<JobResponseDto> findByLocation(String location) {
        return jobRepository.findByLocationContainingIgnoreCase(location)
                .map(JobMapper::toResponseDto);
    }

    public Slice<JobResponseDto> findByCompany(String company) {
        return jobRepository.findByCompanyContainingIgnoreCase(company)
                .map(JobMapper::toResponseDto);
    }

    public Slice<JobResponseDto> findByPostedDateBetween(Instant from, Instant to) {
        return jobRepository.findByPostedDateBetween(from, to)
                .map(JobMapper::toResponseDto);
    }

    public Slice<JobResponseDto> findByJobTypeId(Long jobTypeId) {
        return jobRepository.findByJobTypeId(jobTypeId)
                .map(JobMapper::toResponseDto);
    }

    public Slice<JobResponseDto> findByExperienceLevelId(Long experienceLevelId) {
        return jobRepository.findByExperienceLevelId(experienceLevelId)
                .map(JobMapper::toResponseDto);
    }

    public Slice<JobResponseDto> findBySourceId(Long sourceId) {
        return jobRepository.findBySourceId(sourceId)
                .map(JobMapper::toResponseDto);
    }

    public Optional<JobResponseDto> findById(Long id) {
        return jobRepository.findById(id)
                .map(JobMapper::toResponseDto);
    }

    // ========== Entity-level query methods (for internal use) ==========

    public Optional<Job> findJobEntityById(Long id) {
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
     * @return JobResponseDto of the created job
     */
    @Transactional
    public JobResponseDto createJob(JobRequestDto requestDto, JobType jobType,
                                     ExperienceLevel experienceLevel, JobSource jobSource) {
        Job job = JobMapper.toEntity(requestDto);
        job.setJobType(jobType);
        job.setExperienceLevel(experienceLevel);
        job.setSource(jobSource);

        Job savedJob = jobRepository.save(job);
        return JobMapper.toResponseDto(savedJob);
    }

    /**
     * Update an existing job from JobRequestDto.
     *
     * @param id the job ID to update
     * @param requestDto the job request DTO with updated data
     * @param jobType the JobType entity (can be null to keep existing)
     * @param experienceLevel the ExperienceLevel entity (can be null to keep existing)
     * @param jobSource the JobSource entity (can be null to keep existing)
     * @return JobResponseDto of the updated job, or empty if job not found
     */
    @Transactional
    public Optional<JobResponseDto> updateJob(Long id, JobRequestDto requestDto,
                                               JobType jobType, ExperienceLevel experienceLevel,
                                               JobSource jobSource) {
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

                    Job updatedJob = jobRepository.save(existingJob);
                    return JobMapper.toResponseDto(updatedJob);
                });
    }

    // ========== Count methods ==========

    public long countByJobType(JobType jobType) {
        return jobRepository.countByJobType(jobType);
    }

    public long countByExperienceLevel(ExperienceLevel experienceLevel) {
        return jobRepository.countByExperienceLevel(experienceLevel);
    }

    public long countByCompany(String company) {
        return jobRepository.countByCompanyIgnoreCase(company);
    }

    public long countBySource(JobSource source) {
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
    public Job saveEntity(Job job) {
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
