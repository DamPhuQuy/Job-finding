package com.jobfinding.app.job.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class ExperienceLevel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long experience_level_id;
    private String name; // e.g., Intern, Junior, Senior
}
