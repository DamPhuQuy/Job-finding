package com.jobfinding.app.job.dto;

import com.jobfinding.app.job.entity.ExperienceLevel;
import com.jobfinding.app.job.entity.Job;
import com.jobfinding.app.job.entity.JobSource;
import com.jobfinding.app.job.entity.JobType;

/**
 * Mapper utility class to convert between Job entities and DTOs.
 * Provides static methods for mapping Job to JobResponseDto and JobRequestDto to Job.
 */
public class JobMapper {

    private JobMapper() {
        // Private constructor to prevent instantiation
    }

    /**
     * Convert Job entity to JobResponseDto.
     *
     * @param job the Job entity
     * @return JobResponseDto with all fields mapped
     */
    public static JobResponseDto toResponseDto(Job job) {
        if (job == null) {
            return null;
        }

        return JobResponseDto.builder()
                .title(job.getTitle())
                .description(job.getDescription())
                .company(job.getCompany())
                .location(job.getLocation())
                .minSalary(job.getMinSalary())
                .maxSalary(job.getMaxSalary())
                .salaryCurrency(job.getSalaryCurrency())
                .source(mapJobSource(job.getSource()))
                .jobType(mapJobType(job.getJobType()))
                .experienceLevel(mapExperienceLevel(job.getExperienceLevel()))
                .postedDate(job.getPostedDate())
                .createdAt(job.getCreatedAt())
                .updatedAt(job.getUpdatedAt())
                .build();
    }

    /**
     * Convert JobRequestDto to Job entity.
     * Note: This creates a new Job entity. Related entities (JobType, ExperienceLevel, JobSource)
     * need to be fetched from the database separately.
     *
     * @param dto the JobRequestDto
     * @return Job entity with fields mapped from DTO
     */
    public static Job toEntity(JobRequestDto dto) {
        if (dto == null) {
            return null;
        }

        return Job.builder()
                .title(dto.getTitle())
                .description(dto.getDescription())
                .company(dto.getCompany())
                .location(dto.getLocation())
                .minSalary(dto.getMinSalary())
                .maxSalary(dto.getMaxSalary())
                .salaryCurrency(dto.getSalaryCurrency())
                .postedDate(dto.getPostedDate())
                .build();
    }

    /**
     * Update an existing Job entity with data from JobRequestDto.
     * Does not update the ID or related entities (use setters for those).
     *
     * @param job the existing Job entity to update
     * @param dto the JobRequestDto with new data
     */
    public static void updateEntityFromDto(Job job, JobRequestDto dto) {
        if (job == null || dto == null) {
            return;
        }

        job.setTitle(dto.getTitle());
        job.setDescription(dto.getDescription());
        job.setCompany(dto.getCompany());
        job.setLocation(dto.getLocation());
        job.setMinSalary(dto.getMinSalary());
        job.setMaxSalary(dto.getMaxSalary());
        job.setSalaryCurrency(dto.getSalaryCurrency());
        job.setPostedDate(dto.getPostedDate());
    }

    private static JobResponseDto.JobSourceDto mapJobSource(JobSource source) {
        if (source == null) {
            return null;
        }
        return JobResponseDto.JobSourceDto.builder()
                .id(source.getId())
                .name(source.getName())
                .websiteUrl(source.getWebsiteUrl())
                .build();
    }

    private static JobResponseDto.JobTypeDto mapJobType(JobType jobType) {
        if (jobType == null) {
            return null;
        }
        return JobResponseDto.JobTypeDto.builder()
                .id(jobType.getId())
                .name(jobType.getName())
                .build();
    }

    private static JobResponseDto.ExperienceLevelDto mapExperienceLevel(ExperienceLevel experienceLevel) {
        if (experienceLevel == null) {
            return null;
        }
        return JobResponseDto.ExperienceLevelDto.builder()
                .id(experienceLevel.getId())
                .name(experienceLevel.getName())
                .build();
    }
}

