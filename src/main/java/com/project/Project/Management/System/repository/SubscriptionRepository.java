package com.project.Project.Management.System.repository;

import com.project.Project.Management.System.modal.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubscriptionRepository extends JpaRepository<Subscription,Long> {

    Subscription findByUserId(Long userId);
}
