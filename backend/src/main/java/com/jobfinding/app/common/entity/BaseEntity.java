package com.jobfinding.app.common.entity;
import java.time.Instant;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.jpa.domain.support.AuditingEntityListener; // Listen for JPA entity lifecycle events (e.g., pre-persist, pre-update)

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners; // Listen for JPA entity lifecycle events (e.g., pre-persist, pre-update)
import jakarta.persistence.MappedSuperclass; // Indicates this is a base class for JPA entities, use to
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import lombok.Getter;
import lombok.Setter;

/*
 * Về mặt ngôn ngữ java thì nó có attribute khi kế thừa, nhưng khi map vào database thì gần như bị bỏ đi
 * so we have to use @MappedSuperclass to indicate this is a base class for JPA entities.
 */

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class) // Listen for entity lifecycle events (e.g., pre-persist, pre-update)
@Getter
@Setter
public abstract class BaseEntity {

    @CreatedDate // Automatically set when the entity is first persisted
    @Column(updatable = false, nullable = false)
    private Instant createdAt;


    @LastModifiedBy // Automatically set when the entity is updated
    @Column(nullable = false)
    private Instant updatedAt;

    @PrePersist // Automatically set before inserting into the database if not set
    protected void onCreate() {
        Instant now = Instant.now();
        if (createdAt == null) {
            createdAt = now;
        }

        if (updatedAt == null) {
            updatedAt = now;
        }
    }

    @PreUpdate // Automatically set before updating the database record
    protected void onUpdate() {
        updatedAt = Instant.now();
    }
}
