package com.project.Project.Management.System.service;

import com.project.Project.Management.System.Request.IssueRequest;
import com.project.Project.Management.System.modal.Issue;
import com.project.Project.Management.System.modal.User;

import java.util.List;

public interface IssueService {

    Issue getIssueById(Long issueId) throws Exception;

    List<Issue> getIssueByProjectId(Long ProjectId) throws Exception;

    Issue createIssue(IssueRequest issue, User user) throws Exception;

//    Optional<Issue> updateIssue(Long issueId,IssueRequest updateIssue,Long userId) throws IssueException, UserException;

    void deleteIssue(Long issueId, Long userId) throws Exception;

    Issue addUserToIssue(Long issueId,Long userId)throws Exception;

    Issue updateToStatus(Long issueId, String status)throws Exception;


}
