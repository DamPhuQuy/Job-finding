package com.jobfinding.app.job.entity;

import java.time.Instant;

import com.jobfinding.app.common.entity.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/* * Design Choices Explanation:
 * 1. MappedSuperclass & Auditing: Sử dụng BaseEntity để tách biệt các trường metadata (id, createdAt, updatedAt).
   * Giúp tuân thủ nguyên tắc DRY (Don't Repeat Yourself).
   * Kích hoạt JPA Auditing trong Application để tự động cập nhật các trường này (@EnableJpaAuditing).
 * 2. FetchType.LAZY: Luôn ưu tiên Lazy Loading cho các quan hệ @ManyToOne để tránh lỗi N+1
   * và tối ưu hiệu năng bộ nhớ khi truy vấn danh sách lớn.
 * 3. Encapsulation & Boilerplate: Sử dụng Lombok (@Getter, @Setter, @Builder) để code sạch hơn.
   * Hạn chế @Data trên Entity để tránh các vấn đề phát sinh với hashCode/equals trong JPA.
 * 4. Explicit Naming: Định nghĩa rõ @Table và @Column để tránh phụ thuộc vào naming strategy mặc định của Hibernate.
 * 5. Data Integrity: Sử dụng nullable = false và length cho các trường quan trọng để validate ở mức Database.
 */

@Entity
@Table(
    name = "jobs", // should define table name
    indexes = {
        // title
        @Index(name = "idx_job_title", columnList = "title"),

        // location
        @Index(name = "idx_job_location", columnList = "location"),

        // salary
        @Index(name = "idx_job", columnList = "minSalary, maxSalary"),

        // postedDate
        @Index(name = "idx_job_posted_date", columnList = "postedDate")
    })
@NoArgsConstructor // Generate a no-args constructor, required by JPA
@AllArgsConstructor // Generate an all-args constructor for easier object creation
@Getter
@Setter
@Builder // Generate a builder for easier object creation with a fluent API (Fluent API use method chaining)
public class Job extends BaseEntity {

    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 255)
    private String title;

    @Column(columnDefinition = "TEXT") // Use TEXT type for longer descriptions
    private String description;

    @Column(nullable = false, length = 255)
    private String company;

    @Column(nullable = false, length = 255)
    private String location;

    /*
     * Salary range fields with currency
     * Easily filter with min/max or exact salary
     */
    private Long minSalary;
    private Long maxSalary;
    private String salaryCurrency; // e.g., USD, EUR

    @ManyToOne(fetch = FetchType.LAZY) // Many jobs can have one source, always fetch lazily
    @JoinColumn(
        name = "source_id",
        foreignKey = @ForeignKey(name = "fk_job_source")
    )
    /*
     * SQL joins on source_id
     SELECT *
     FROM Job j
     JOIN JobSource s ON j.source_id = s.source_id
     */
    private JobSource source;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "job_type_id", foreignKey = @ForeignKey(name = "fk_job_job_type"))
    /*
     * SQL joins on job_type_id
     SELECT *
     FROM Job j
     JOIN JobType t ON j.job_type_id = t.job_type_id
     */
    private JobType jobType; // FE, BE, Fullstack

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "experience_level_id", foreignKey = @ForeignKey(name = "fk_job_experience_level"))
    /*
     * SQL joins on experience_level_id
     SELECT *
     FROM Job j
     JOIN ExperienceLevel e ON j.experience_level_id = e.experience_level_id
     */
    private ExperienceLevel experienceLevel; // Intern, Junior, Senior
    private Instant postedDate;

    protected void onCreate() {
        if (postedDate == null) {
            postedDate = Instant.now();
        }
    }
}
