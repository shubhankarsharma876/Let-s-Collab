package com.project.Project.Management.System.repository;

import com.project.Project.Management.System.modal.Issue;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface IssueRepository extends JpaRepository<Issue,Long> {


    public List<Issue> getIssueByProjectId(Long projectId);
}
