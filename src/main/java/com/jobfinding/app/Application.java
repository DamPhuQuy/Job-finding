package com.jobfinding.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing // Enable JPA Auditing for automatic population of auditing fields
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
