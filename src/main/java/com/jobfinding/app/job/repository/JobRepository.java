package com.jobfinding.app.job.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jobfinding.app.job.entity.Job;

import java.util.Optional;

@Repository
public interface JobRepository extends JpaRepository<Job, Long> {
    
}
