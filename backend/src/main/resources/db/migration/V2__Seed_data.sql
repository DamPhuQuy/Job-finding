-- V2: Seed data for job finding application
-- Order matters: Insert lookup tables first, then jobs table

-- ============================================================
-- 1. Job Sources (where the jobs are posted from)
-- ============================================================
INSERT INTO job_sources (name, website_url, created_at, updated_at) VALUES
('LinkedIn', 'https://linkedin.com', NOW(), NOW()),
('Indeed', 'https://indeed.com', NOW(), NOW()),
('Glassdoor', 'https://glassdoor.com', NOW(), NOW()),
('AngelList', 'https://angel.co', NOW(), NOW()),
('Company Website', NULL, NOW(), NOW()),
('VietnamWorks', 'https://vietnamworks.com', NOW(), NOW()),
('TopDev', 'https://topdev.vn', NOW(), NOW()),
('ITviec', 'https://itviec.com', NOW(), NOW());

-- ============================================================
-- 2. Job Types (Frontend, Backend, Fullstack, etc.)
-- ============================================================
INSERT INTO job_types (name, created_at, updated_at) VALUES
('Frontend Developer', NOW(), NOW()),
('Backend Developer', NOW(), NOW()),
('Fullstack Developer', NOW(), NOW()),
('Mobile Developer', NOW(), NOW()),
('DevOps Engineer', NOW(), NOW()),
('Data Engineer', NOW(), NOW()),
('QA Engineer', NOW(), NOW()),
('UI/UX Designer', NOW(), NOW()),
('Product Manager', NOW(), NOW()),
('Tech Lead', NOW(), NOW());

-- ============================================================
-- 3. Experience Levels
-- ============================================================
INSERT INTO experience_levels (name, created_at, updated_at) VALUES
('Intern', NOW(), NOW()),
('Fresher', NOW(), NOW()),
('Junior', NOW(), NOW()),
('Middle', NOW(), NOW()),
('Senior', NOW(), NOW()),
('Lead', NOW(), NOW()),
('Manager', NOW(), NOW());

-- ============================================================
-- 4. Jobs (actual job postings)
-- ============================================================

-- Frontend Jobs
INSERT INTO jobs (title, description, company, location, min_salary, max_salary, salary_currency, source_id, job_type_id, experience_level_id, posted_date, created_at, updated_at) VALUES
('Senior Frontend Developer (React)',
'We are looking for a Senior Frontend Developer with strong React.js experience. You will be responsible for building responsive web applications and collaborating with design and backend teams. Requirements: 5+ years of experience, expert in React, TypeScript, Redux, and modern CSS frameworks.',
'TechCorp Vietnam', 'Ho Chi Minh City', 2000, 3500, 'USD',
(SELECT id FROM job_sources WHERE name = 'ITviec'),
(SELECT id FROM job_types WHERE name = 'Frontend Developer'),
(SELECT id FROM experience_levels WHERE name = 'Senior'),
NOW() - INTERVAL '2 days', NOW(), NOW()),

('Frontend Developer (Vue.js)',
'Join our growing team as a Mid-level Frontend Developer. Work on exciting e-commerce projects using Vue.js, Nuxt.js, and Tailwind CSS. Must have 3+ years of experience with Vue ecosystem.',
'E-Commerce Solutions', 'Hanoi', 1500, 2500, 'USD',
(SELECT id FROM job_sources WHERE name = 'TopDev'),
(SELECT id FROM job_types WHERE name = 'Frontend Developer'),
(SELECT id FROM experience_levels WHERE name = 'Middle'),
NOW() - INTERVAL '5 days', NOW(), NOW()),

('Junior Frontend Developer',
'Great opportunity for junior developers to learn and grow. We use React, Next.js, and TypeScript. Looking for candidates with 1-2 years of experience and strong fundamentals in HTML, CSS, JavaScript.',
'Startup Hub', 'Da Nang', 800, 1200, 'USD',
(SELECT id FROM job_sources WHERE name = 'VietnamWorks'),
(SELECT id FROM job_types WHERE name = 'Frontend Developer'),
(SELECT id FROM experience_levels WHERE name = 'Junior'),
NOW() - INTERVAL '1 day', NOW(), NOW());

-- Backend Jobs
INSERT INTO jobs (title, description, company, location, min_salary, max_salary, salary_currency, source_id, job_type_id, experience_level_id, posted_date, created_at, updated_at) VALUES
('Senior Backend Developer (Java/Spring Boot)',
'We need an experienced Backend Developer to design and implement scalable microservices. Requirements: 5+ years with Java, Spring Boot, PostgreSQL, Redis, Kafka. Experience with AWS is a plus.',
'FinTech Solutions', 'Ho Chi Minh City', 2500, 4000, 'USD',
(SELECT id FROM job_sources WHERE name = 'LinkedIn'),
(SELECT id FROM job_types WHERE name = 'Backend Developer'),
(SELECT id FROM experience_levels WHERE name = 'Senior'),
NOW() - INTERVAL '3 days', NOW(), NOW()),

('Backend Developer (Node.js)',
'Looking for a Mid-level Backend Developer proficient in Node.js, Express, and MongoDB. You will work on building RESTful APIs and integrating third-party services. 3+ years of experience required.',
'Digital Agency', 'Hanoi', 1800, 2800, 'USD',
(SELECT id FROM job_sources WHERE name = 'Indeed'),
(SELECT id FROM job_types WHERE name = 'Backend Developer'),
(SELECT id FROM experience_levels WHERE name = 'Middle'),
NOW() - INTERVAL '7 days', NOW(), NOW()),

('Junior Backend Developer (Python)',
'Entry-level position for Backend Developer with Python/Django or Flask experience. We provide mentorship and training. Ideal for candidates with 1 year of experience.',
'AI Research Lab', 'Ho Chi Minh City', 700, 1000, 'USD',
(SELECT id FROM job_sources WHERE name = 'Company Website'),
(SELECT id FROM job_types WHERE name = 'Backend Developer'),
(SELECT id FROM experience_levels WHERE name = 'Junior'),
NOW() - INTERVAL '4 days', NOW(), NOW());

-- Fullstack Jobs
INSERT INTO jobs (title, description, company, location, min_salary, max_salary, salary_currency, source_id, job_type_id, experience_level_id, posted_date, created_at, updated_at) VALUES
('Lead Fullstack Developer',
'Lead our engineering team and architect scalable web applications. Tech stack: React, Node.js, TypeScript, PostgreSQL. Must have 7+ years of experience and strong leadership skills.',
'Tech Unicorn', 'Remote', 3500, 5000, 'USD',
(SELECT id FROM job_sources WHERE name = 'AngelList'),
(SELECT id FROM job_types WHERE name = 'Fullstack Developer'),
(SELECT id FROM experience_levels WHERE name = 'Lead'),
NOW() - INTERVAL '1 day', NOW(), NOW()),

('Fullstack Developer (MERN Stack)',
'Build modern web applications using MongoDB, Express, React, and Node.js. We are looking for developers with 3+ years of fullstack experience and a passion for clean code.',
'Software House', 'Ho Chi Minh City', 1800, 2800, 'USD',
(SELECT id FROM job_sources WHERE name = 'Glassdoor'),
(SELECT id FROM job_types WHERE name = 'Fullstack Developer'),
(SELECT id FROM experience_levels WHERE name = 'Middle'),
NOW() - INTERVAL '6 days', NOW(), NOW()),

('Senior Fullstack Developer (Java + React)',
'Work on enterprise applications using Java Spring Boot backend and React frontend. Must have 5+ years of experience with both technologies and strong system design skills.',
'Banking Corp', 'Hanoi', 2800, 4200, 'USD',
(SELECT id FROM job_sources WHERE name = 'ITviec'),
(SELECT id FROM job_types WHERE name = 'Fullstack Developer'),
(SELECT id FROM experience_levels WHERE name = 'Senior'),
NOW() - INTERVAL '2 days', NOW(), NOW());

-- Mobile Developer Jobs
INSERT INTO jobs (title, description, company, location, min_salary, max_salary, salary_currency, source_id, job_type_id, experience_level_id, posted_date, created_at, updated_at) VALUES
('Senior Mobile Developer (React Native)',
'Develop cross-platform mobile applications using React Native. Requirements: 5+ years of mobile development experience, proficiency in React Native, iOS and Android deployment.',
'Mobile First Co', 'Ho Chi Minh City', 2200, 3500, 'USD',
(SELECT id FROM job_sources WHERE name = 'LinkedIn'),
(SELECT id FROM job_types WHERE name = 'Mobile Developer'),
(SELECT id FROM experience_levels WHERE name = 'Senior'),
NOW() - INTERVAL '8 days', NOW(), NOW()),

('Flutter Developer',
'Build beautiful mobile apps with Flutter. We need a developer with 3+ years of experience in Flutter/Dart and publishing apps to App Store and Google Play.',
'App Studio', 'Da Nang', 1500, 2300, 'USD',
(SELECT id FROM job_sources WHERE name = 'TopDev'),
(SELECT id FROM job_types WHERE name = 'Mobile Developer'),
(SELECT id FROM experience_levels WHERE name = 'Middle'),
NOW() - INTERVAL '3 days', NOW(), NOW());

-- DevOps Jobs
INSERT INTO jobs (title, description, company, location, min_salary, max_salary, salary_currency, source_id, job_type_id, experience_level_id, posted_date, created_at, updated_at) VALUES
('Senior DevOps Engineer',
'Manage and optimize our cloud infrastructure on AWS/Azure. Requirements: 5+ years of experience with Docker, Kubernetes, CI/CD pipelines, Terraform, and monitoring tools.',
'Cloud Solutions Inc', 'Remote', 2800, 4500, 'USD',
(SELECT id FROM job_sources WHERE name = 'LinkedIn'),
(SELECT id FROM job_types WHERE name = 'DevOps Engineer'),
(SELECT id FROM experience_levels WHERE name = 'Senior'),
NOW() - INTERVAL '5 days', NOW(), NOW()),

('DevOps Engineer',
'Help us build and maintain our infrastructure. Experience with Linux, Docker, Jenkins, and AWS required. 3+ years of experience.',
'SaaS Company', 'Ho Chi Minh City', 2000, 3000, 'USD',
(SELECT id FROM job_sources WHERE name = 'Indeed'),
(SELECT id FROM job_types WHERE name = 'DevOps Engineer'),
(SELECT id FROM experience_levels WHERE name = 'Middle'),
NOW() - INTERVAL '4 days', NOW(), NOW());

-- Data Engineer Jobs
INSERT INTO jobs (title, description, company, location, min_salary, max_salary, salary_currency, source_id, job_type_id, experience_level_id, posted_date, created_at, updated_at) VALUES
('Lead Data Engineer',
'Design and build scalable data pipelines and warehouses. Tech stack: Python, Airflow, Spark, Kafka, Snowflake. Must have 7+ years of experience in data engineering.',
'Data Analytics Corp', 'Hanoi', 3000, 4800, 'USD',
(SELECT id FROM job_sources WHERE name = 'AngelList'),
(SELECT id FROM job_types WHERE name = 'Data Engineer'),
(SELECT id FROM experience_levels WHERE name = 'Lead'),
NOW() - INTERVAL '2 days', NOW(), NOW()),

('Data Engineer (Python + SQL)',
'Build ETL pipelines and work with big data technologies. Requirements: 3+ years of experience with Python, SQL, data warehousing, and cloud platforms.',
'E-Commerce Giant', 'Ho Chi Minh City', 2000, 3200, 'USD',
(SELECT id FROM job_sources WHERE name = 'VietnamWorks'),
(SELECT id FROM job_types WHERE name = 'Data Engineer'),
(SELECT id FROM experience_levels WHERE name = 'Middle'),
NOW() - INTERVAL '6 days', NOW(), NOW());

-- QA Engineer Jobs
INSERT INTO jobs (title, description, company, location, min_salary, max_salary, salary_currency, source_id, job_type_id, experience_level_id, posted_date, created_at, updated_at) VALUES
('Senior QA Engineer (Automation)',
'Lead our quality assurance efforts with automated testing. Requirements: 5+ years of experience with Selenium, Cypress, Jest, and CI/CD integration.',
'Quality Software Ltd', 'Ho Chi Minh City', 1800, 2800, 'USD',
(SELECT id FROM job_sources WHERE name = 'ITviec'),
(SELECT id FROM job_types WHERE name = 'QA Engineer'),
(SELECT id FROM experience_levels WHERE name = 'Senior'),
NOW() - INTERVAL '7 days', NOW(), NOW()),

('QA Engineer',
'Perform manual and automated testing for web and mobile applications. Experience with test frameworks and agile methodology required. 2-3 years of experience.',
'Product Company', 'Hanoi', 1000, 1800, 'USD',
(SELECT id FROM job_sources WHERE name = 'TopDev'),
(SELECT id FROM job_types WHERE name = 'QA Engineer'),
(SELECT id FROM experience_levels WHERE name = 'Middle'),
NOW() - INTERVAL '5 days', NOW(), NOW());

-- UI/UX Designer Jobs
INSERT INTO jobs (title, description, company, location, min_salary, max_salary, salary_currency, source_id, job_type_id, experience_level_id, posted_date, created_at, updated_at) VALUES
('Senior UI/UX Designer',
'Design beautiful and intuitive user interfaces for web and mobile apps. Requirements: 5+ years of experience with Figma, Adobe Creative Suite, and design systems.',
'Design Studio', 'Ho Chi Minh City', 1800, 3000, 'USD',
(SELECT id FROM job_sources WHERE name = 'Glassdoor'),
(SELECT id FROM job_types WHERE name = 'UI/UX Designer'),
(SELECT id FROM experience_levels WHERE name = 'Senior'),
NOW() - INTERVAL '3 days', NOW(), NOW()),

('UI/UX Designer',
'Create engaging user experiences for our digital products. Must have 3+ years of experience, strong portfolio, and proficiency in design tools.',
'Creative Agency', 'Da Nang', 1200, 2000, 'USD',
(SELECT id FROM job_sources WHERE name = 'VietnamWorks'),
(SELECT id FROM job_types WHERE name = 'UI/UX Designer'),
(SELECT id FROM experience_levels WHERE name = 'Middle'),
NOW() - INTERVAL '4 days', NOW(), NOW());

-- Product Manager & Tech Lead Jobs
INSERT INTO jobs (title, description, company, location, min_salary, max_salary, salary_currency, source_id, job_type_id, experience_level_id, posted_date, created_at, updated_at) VALUES
('Technical Product Manager',
'Drive product strategy and execution for our SaaS platform. Requirements: 5+ years of product management experience, technical background, and excellent communication skills.',
'SaaS Platform', 'Remote', 3000, 5000, 'USD',
(SELECT id FROM job_sources WHERE name = 'LinkedIn'),
(SELECT id FROM job_types WHERE name = 'Product Manager'),
(SELECT id FROM experience_levels WHERE name = 'Senior'),
NOW() - INTERVAL '1 day', NOW(), NOW()),

('Tech Lead (Java/Microservices)',
'Lead a team of engineers building scalable microservices. Requirements: 8+ years of experience, strong in Java/Spring Boot, system design, and mentoring.',
'Enterprise Solutions', 'Ho Chi Minh City', 3500, 5500, 'USD',
(SELECT id FROM job_sources WHERE name = 'ITviec'),
(SELECT id FROM job_types WHERE name = 'Tech Lead'),
(SELECT id FROM experience_levels WHERE name = 'Lead'),
NOW() - INTERVAL '2 days', NOW(), NOW());

-- Intern & Fresher Opportunities
INSERT INTO jobs (title, description, company, location, min_salary, max_salary, salary_currency, source_id, job_type_id, experience_level_id, posted_date, created_at, updated_at) VALUES
('Frontend Developer Intern',
'Learn and grow with our experienced team. We will train you in React, TypeScript, and modern web development practices. Perfect for students or fresh graduates.',
'Tech Training Center', 'Hanoi', 300, 500, 'USD',
(SELECT id FROM job_sources WHERE name = 'Company Website'),
(SELECT id FROM job_types WHERE name = 'Frontend Developer'),
(SELECT id FROM experience_levels WHERE name = 'Intern'),
NOW() - INTERVAL '1 day', NOW(), NOW()),

('Backend Developer Fresher',
'Start your career with us! We are looking for passionate fresh graduates interested in backend development. Training provided in Java, Spring Boot, and SQL.',
'IT Consulting', 'Ho Chi Minh City', 500, 800, 'USD',
(SELECT id FROM job_sources WHERE name = 'TopDev'),
(SELECT id FROM job_types WHERE name = 'Backend Developer'),
(SELECT id FROM experience_levels WHERE name = 'Fresher'),
NOW() - INTERVAL '3 days', NOW(), NOW()),

('Fullstack Developer Intern',
'Internship opportunity for students interested in fullstack development. Learn MERN stack with hands-on projects and mentorship from senior developers.',
'Innovation Lab', 'Da Nang', 200, 400, 'USD',
(SELECT id FROM job_sources WHERE name = 'VietnamWorks'),
(SELECT id FROM job_types WHERE name = 'Fullstack Developer'),
(SELECT id FROM experience_levels WHERE name = 'Intern'),
NOW() - INTERVAL '2 days', NOW(), NOW());
