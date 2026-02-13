-- Reset script: Drop all tables and Flyway history
-- Run this if you need to reset the database and rerun all migrations

DROP TABLE IF EXISTS jobs CASCADE;
DROP TABLE IF EXISTS job_sources CASCADE;
DROP TABLE IF EXISTS job_types CASCADE;
DROP TABLE IF EXISTS experience_levels CASCADE;
DROP TABLE IF EXISTS flyway_schema_history CASCADE;

-- Now you can run the application and all migrations will execute from scratch
