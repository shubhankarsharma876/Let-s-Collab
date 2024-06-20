package com.project.Project.Management.System.service;

import com.project.Project.Management.System.modal.PlanType;
import com.project.Project.Management.System.modal.Subscription;
import com.project.Project.Management.System.modal.User;

public interface SubscriptionService {

    Subscription createSubscription(User user);

    Subscription getUsersSubscription(Long userId) throws Exception;

    Subscription upgradeSubscription(Long userId, PlanType planType);

    boolean isValid(Subscription subscription);
}
