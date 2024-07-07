package com.project.Project.Management.System.service;

import com.project.Project.Management.System.Request.IssueRequest;
import com.project.Project.Management.System.modal.Issue;
import com.project.Project.Management.System.modal.Project;
import com.project.Project.Management.System.modal.User;
import com.project.Project.Management.System.repository.IssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IssueServiceImpl implements IssueService{

    @Autowired
    private IssueRepository issueRepository;

    @Autowired
    private ProjectService projectService;


    @Autowired
    private UserService userService;
    @Override
    public Issue getIssueById(Long issueId) throws Exception {

        Optional<Issue>issue = issueRepository.findById(issueId);
        if(issue.isPresent()){
            return issue.get();
        }

        throw new Exception(STR."No issue with this ID found \{issueId}");
    }

    @Override
    public List<Issue> getIssueByProjectId(Long projectId) throws Exception {

        return issueRepository.getIssueByProjectId(projectId);
    }

    @Override
    public Issue createIssue(IssueRequest issueRequest, User user) throws Exception {
        Project project = projectService.getProjectById(issueRequest.getProjectId());
        Issue issue = new Issue();
        issue.setTitle(issueRequest.getTitle());
        issue.setDescription(issueRequest.getDescription());
        issue.setStatus(issueRequest.getStatus());
        issue.setProjectID(issueRequest.getProjectId());
        issue.setPriority(issueRequest.getPriority());
        issue.setDueDate(issueRequest.getDueDate());
        issue.setProject(project);
        return issueRepository.save(issue);

    }

    @Override
    public void deleteIssue(Long issueId, Long userId) throws Exception {
        // this itself will provide either it is true and false and then only it will move to next line.
        getIssueById(issueId);
        issueRepository.deleteById(issueId);
    }

    @Override
    public Issue addUserToIssue(Long issueId, Long userId) throws Exception {
        User user = userService.findUserById(userId);
        Issue issue=getIssueById(issueId);
        issue.setAssignee(user);

        return issueRepository.save(issue);
    }

    @Override
    public Issue updateToStatus(Long issueId, String status) throws Exception {
        Issue issue = getIssueById(issueId);
        issue.setStatus(status);
        return issueRepository.save(issue);
    }
}
