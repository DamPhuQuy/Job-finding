package com.jobfinding.app.job.dto;

import java.time.Instant;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO for returning Job data in API responses.
 * Includes nested DTOs for related entities to avoid lazy loading issues.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class JobSummaryResponse {

    private Long id;
    private String title;
    private String company;
    private String location;
    private Long minSalary;
    private Long maxSalary;
    private String salaryCurrency;
    private JobTypeDto jobType;
    private ExperienceLevelDto experienceLevel;
    private Instant postedDate;

    /**
     * DTO for JobSource
     */
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class JobSourceDto {
        private Long id;
        private String name;
        private String websiteUrl;
    }

    /**
     * DTO for JobType
     */
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class JobTypeDto {
        private Long id;
        private String name;
    }

    /**
     * DTO for ExperienceLevel
     */
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class ExperienceLevelDto {
        private Long id;
        private String name;
    }
}

