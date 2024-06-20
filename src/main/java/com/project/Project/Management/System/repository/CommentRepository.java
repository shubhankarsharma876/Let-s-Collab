package com.project.Project.Management.System.repository;

import com.project.Project.Management.System.modal.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment,Long> {
    List<Comment> findByIssueId(Long issueId);
}
