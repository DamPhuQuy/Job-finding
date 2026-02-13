package com.jobfinding.app.job.dto;

import java.time.Instant;

import com.jobfinding.app.job.dto.JobSummaryResponse.ExperienceLevelDto;
import com.jobfinding.app.job.dto.JobSummaryResponse.JobSourceDto;
import com.jobfinding.app.job.dto.JobSummaryResponse.JobTypeDto;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Builder
@Getter
@Setter
public class JobDetailedResponse {
    private Long id;
    private String title;
    private String description;
    private String company;
    private String location;
    private Long minSalary;
    private Long maxSalary;
    private String salaryCurrency;
    private JobSourceDto source;
    private JobTypeDto jobType;
    private ExperienceLevelDto experienceLevel;
    private Instant postedDate;
}
