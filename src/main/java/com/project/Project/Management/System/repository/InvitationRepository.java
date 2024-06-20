package com.project.Project.Management.System.repository;

import com.project.Project.Management.System.modal.Invitation;
import com.project.Project.Management.System.service.InvitationService;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvitationRepository extends JpaRepository<Invitation, Long> {
    Invitation findByToken(String token);

    Invitation findByEmail(String userEmail);

}
