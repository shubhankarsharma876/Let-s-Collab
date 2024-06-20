package com.project.Project.Management.System.repository;

import com.project.Project.Management.System.modal.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    User findByEmail(String email);

}
