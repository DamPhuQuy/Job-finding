-- V1: Create schema for job finding application

-- ============================================================
-- 1. Job Sources Table
-- ============================================================
CREATE TABLE job_sources (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    website_url VARCHAR(255),
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL
);

-- ============================================================
-- 2. Job Types Table
-- ============================================================
CREATE TABLE job_types (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL
);

-- ============================================================
-- 3. Experience Levels Table
-- ============================================================
CREATE TABLE experience_levels (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL
);

-- ============================================================
-- 4. Jobs Table (Main table with foreign keys)
-- ============================================================
CREATE TABLE jobs (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    company VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    min_salary BIGINT,
    max_salary BIGINT,
    salary_currency VARCHAR(10),
    source_id BIGINT,
    job_type_id BIGINT,
    experience_level_id BIGINT,
    posted_date TIMESTAMP,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,

    -- Foreign Keys
    CONSTRAINT fk_job_source FOREIGN KEY (source_id)
        REFERENCES job_sources(id) ON DELETE SET NULL,
    CONSTRAINT fk_job_job_type FOREIGN KEY (job_type_id)
        REFERENCES job_types(id) ON DELETE SET NULL,
    CONSTRAINT fk_job_experience_level FOREIGN KEY (experience_level_id)
        REFERENCES experience_levels(id) ON DELETE SET NULL
);

-- ============================================================
-- 5. Indexes for Performance
-- ============================================================
CREATE INDEX idx_job_title ON jobs(title);
CREATE INDEX idx_job_location ON jobs(location);
CREATE INDEX idx_job_salary ON jobs(min_salary, max_salary);
CREATE INDEX idx_job_posted_date ON jobs(posted_date);
CREATE INDEX idx_job_source_id ON jobs(source_id);
CREATE INDEX idx_job_type_id ON jobs(job_type_id);
CREATE INDEX idx_job_experience_level_id ON jobs(experience_level_id);
