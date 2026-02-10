package com.jobfinding.app.job.entity;

import java.time.Instant;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Job {
    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY) // AUTO_INCREMENT
    private Long id;
    private String title;
    private String description;
    private String company;
    private String location;
    private String salary;

    @ManyToOne(fetch = FetchType.LAZY) // Many jobs can have one source, always fetch lazily
    @JoinColumn(name = "source_id")
    /*
     * SQL joins on source_id
     SELECT *
     FROM Job j
     JOIN JobSource s ON j.source_id = s.source_id
     */
    private JobSource source;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "job_type_id")
    /*
     * SQL joins on job_type_id
     SELECT *
     FROM Job j
     JOIN JobType t ON j.job_type_id = t.job_type_id
     */
    private JobType jobType; // FE, BE, Fullstack

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "experience_level_id")
    /*
     * SQL joins on experience_level_id
     SELECT *
     FROM Job j
     JOIN ExperienceLevel e ON j.experience_level_id = e.experience_level_id
     */
    private ExperienceLevel experienceLevel; // Intern, Junior, Senior
    private Instant postedDate;

    private Instant createdAt;
    private Instant updatedAt;

    @PrePersist // Automatically set before inserting into the database if not set
    protected void onCreate() {
        Instant now = Instant.now();
        this.postedDate = now;
        this.createdAt = now;
        this.updatedAt = now;
    }

    @PreUpdate // Automatically set before updating the database record
    protected void onUpdate() {
        Instant now = Instant.now();
        this.updatedAt = now;
    }
}
