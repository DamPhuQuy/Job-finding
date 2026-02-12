package com.jobfinding.app.job.controller;

import java.time.Instant;

import org.springframework.data.domain.Slice;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jobfinding.app.job.dto.JobRequestDto;
import com.jobfinding.app.job.dto.JobResponseDto;
import com.jobfinding.app.job.entity.ExperienceLevel;
import com.jobfinding.app.job.entity.JobSource;
import com.jobfinding.app.job.entity.JobType;
import com.jobfinding.app.job.repository.ExperienceLevelRepository;
import com.jobfinding.app.job.repository.JobSourceRepository;
import com.jobfinding.app.job.repository.JobTypeRepository;
import com.jobfinding.app.job.service.JobService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/jobs")
public class JobController {

    private final JobService jobService;
    private final JobTypeRepository jobTypeRepository;
    private final ExperienceLevelRepository experienceLevelRepository;
    private final JobSourceRepository jobSourceRepository;

    public JobController(JobService jobService,
                        JobTypeRepository jobTypeRepository,
                        ExperienceLevelRepository experienceLevelRepository,
                        JobSourceRepository jobSourceRepository) {
        this.jobService = jobService;
        this.jobTypeRepository = jobTypeRepository;
        this.experienceLevelRepository = experienceLevelRepository;
        this.jobSourceRepository = jobSourceRepository;
    }

    // ========== Query/Search Endpoints ==========

    /**
     * Get a job by ID
     * GET /api/jobs/{id}
     */
    @GetMapping("/{id}")
    public ResponseEntity<JobResponseDto> getJobById(@PathVariable Long id) {
        return jobService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Search jobs by title
     * GET /api/jobs/search/title?keyword={keyword}
     */
    @GetMapping("/search/title")
    public ResponseEntity<Slice<JobResponseDto>> searchByTitle(
            @RequestParam String keyword) {
        Slice<JobResponseDto> jobs = jobService.findByTitle(keyword);
        return ResponseEntity.ok(jobs);
    }

    /**
     * Search jobs by location
     * GET /api/jobs/search/location?location={location}
     */
    @GetMapping("/search/location")
    public ResponseEntity<Slice<JobResponseDto>> searchByLocation(
            @RequestParam String location) {
        Slice<JobResponseDto> jobs = jobService.findByLocation(location);
        return ResponseEntity.ok(jobs);
    }

    /**
     * Search jobs by company
     * GET /api/jobs/search/company?company={company}
     */
    @GetMapping("/search/company")
    public ResponseEntity<Slice<JobResponseDto>> searchByCompany(
            @RequestParam String company) {
        Slice<JobResponseDto> jobs = jobService.findByCompany(company);
        return ResponseEntity.ok(jobs);
    }

    /**
     * Search jobs by date range
     * GET /api/jobs/search/date-range?from={from}&to={to}
     */
    @GetMapping("/search/date-range")
    public ResponseEntity<Slice<JobResponseDto>> searchByDateRange(
            @RequestParam Instant from,
            @RequestParam Instant to) {
        Slice<JobResponseDto> jobs = jobService.findByPostedDateBetween(from, to);
        return ResponseEntity.ok(jobs);
    }

    /**
     * Search jobs by job type ID
     * GET /api/jobs/search/job-type/{jobTypeId}
     */
    @GetMapping("/search/job-type/{jobTypeId}")
    public ResponseEntity<Slice<JobResponseDto>> searchByJobType(
            @PathVariable Long jobTypeId) {
        Slice<JobResponseDto> jobs = jobService.findByJobTypeId(jobTypeId);
        return ResponseEntity.ok(jobs);
    }

    /**
     * Search jobs by experience level ID
     * GET /api/jobs/search/experience-level/{experienceLevelId}
     */
    @GetMapping("/search/experience-level/{experienceLevelId}")
    public ResponseEntity<Slice<JobResponseDto>> searchByExperienceLevel(
            @PathVariable Long experienceLevelId) {
        Slice<JobResponseDto> jobs = jobService.findByExperienceLevelId(experienceLevelId);
        return ResponseEntity.ok(jobs);
    }

    /**
     * Search jobs by source ID
     * GET /api/jobs/search/source/{sourceId}
     */
    @GetMapping("/search/source/{sourceId}")
    public ResponseEntity<Slice<JobResponseDto>> searchBySource(
            @PathVariable Long sourceId) {
        Slice<JobResponseDto> jobs = jobService.findBySourceId(sourceId);
        return ResponseEntity.ok(jobs);
    }

    // ========== Create Endpoint ==========

    /**
     * Create a new job
     * POST /api/jobs
     *
     * Request body should contain:
     * - title, company, location (required)
     * - description, salary info (optional)
     * - jobTypeId, experienceLevelId, sourceId (required)
     */
    @PostMapping
    public ResponseEntity<?> createJob(@Valid @RequestBody JobRequestDto requestDto) {

        // Fetch related entities with error handling
        JobType jobType = jobTypeRepository.findById(requestDto.getJobTypeId())
                .orElseThrow(() -> new IllegalArgumentException(
                        "JobType not found with id: " + requestDto.getJobTypeId()));

        ExperienceLevel experienceLevel = experienceLevelRepository.findById(requestDto.getExperienceLevelId())
                .orElseThrow(() -> new IllegalArgumentException(
                        "ExperienceLevel not found with id: " + requestDto.getExperienceLevelId()));

        JobSource jobSource = jobSourceRepository.findById(requestDto.getSourceId())
                .orElseThrow(() -> new IllegalArgumentException(
                        "JobSource not found with id: " + requestDto.getSourceId()));

        JobResponseDto response = jobService.createJob(requestDto, jobType, experienceLevel, jobSource);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    // ========== Update Endpoint ==========

    /**
     * Update an existing job
     * PUT /api/jobs/{id}
     *
     * Updates all fields of the job. Related entities are fetched based on IDs in the request.
     */
    @PutMapping("/{id}")
    public ResponseEntity<?> updateJob(
            @PathVariable Long id,
            @Valid @RequestBody JobRequestDto requestDto) {

        // Fetch related entities with error handling
        JobType jobType = jobTypeRepository.findById(requestDto.getJobTypeId())
                .orElseThrow(() -> new IllegalArgumentException(
                        "JobType not found with id: " + requestDto.getJobTypeId()));

        ExperienceLevel experienceLevel = experienceLevelRepository.findById(requestDto.getExperienceLevelId())
                .orElseThrow(() -> new IllegalArgumentException(
                        "ExperienceLevel not found with id: " + requestDto.getExperienceLevelId()));

        JobSource jobSource = jobSourceRepository.findById(requestDto.getSourceId())
                .orElseThrow(() -> new IllegalArgumentException(
                        "JobSource not found with id: " + requestDto.getSourceId()));

        return jobService.updateJob(id, requestDto, jobType, experienceLevel, jobSource)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // ========== Delete Endpoint ==========

    /**
     * Delete a job by ID
     * DELETE /api/jobs/{id}
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJob(@PathVariable Long id) {
        if (!jobService.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        jobService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    // ========== Utility Endpoints ==========

    /**
     * Check if a job exists
     * GET /api/jobs/{id}/exists
     */
    @GetMapping("/{id}/exists")
    public ResponseEntity<Boolean> checkJobExists(@PathVariable Long id) {
        return ResponseEntity.ok(jobService.existsById(id));
    }

    /**
     * Count jobs by company
     * GET /api/jobs/count/company?company={company}
     */
    @GetMapping("/count/company")
    public ResponseEntity<Long> countByCompany(@RequestParam String company) {
        return ResponseEntity.ok(jobService.countByCompany(company));
    }

    /**
     * Delete jobs posted before a certain date
     * DELETE /api/jobs/cleanup?before={timestamp}
     */
    @DeleteMapping("/cleanup")
    public ResponseEntity<Long> deleteOldJobs(@RequestParam Instant before) {
        long deletedCount = jobService.deleteByPostedDateBefore(before);
        return ResponseEntity.ok(deletedCount);
    }
}
