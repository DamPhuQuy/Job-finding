package com.jobfinding.app.job.dto;

import java.time.Instant;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO for creating or updating a Job entity.
 * Contains validation annotations to ensure data integrity.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class JobRequestDto {

    @NotBlank(message = "Title is required")
    @Size(max = 255, message = "Title must not exceed 255 characters")
    private String title;

    private String description;

    @NotBlank(message = "Company name is required")
    @Size(max = 255, message = "Company name must not exceed 255 characters")
    private String company;

    @NotBlank(message = "Location is required")
    @Size(max = 255, message = "Location must not exceed 255 characters")
    private String location;

    @Positive(message = "Minimum salary must be positive")
    private Long minSalary;

    @Positive(message = "Maximum salary must be positive")
    private Long maxSalary;

    @Size(max = 10, message = "Currency code must not exceed 10 characters")
    private String salaryCurrency;

    /*
     * Using id instead of transferring whole object
     * help payload to be smaller and avoid unnecessary data transfer.
     */

    @NotNull(message = "Source ID is required")
    private Long sourceId;

    @NotNull(message = "Job type ID is required")
    private Long jobTypeId;

    @NotNull(message = "Experience level ID is required")
    private Long experienceLevelId;

    private Instant postedDate;
}


