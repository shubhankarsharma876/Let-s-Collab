package com.project.Project.Management.System.controller;


import com.project.Project.Management.System.Request.IssueRequest;
import com.project.Project.Management.System.modal.DTO.IssueDTO;
import com.project.Project.Management.System.modal.Issue;
import com.project.Project.Management.System.modal.User;
import com.project.Project.Management.System.response.AuthResponse;
import com.project.Project.Management.System.response.MessageResponse;
import com.project.Project.Management.System.service.IssueService;
import com.project.Project.Management.System.service.UserService;
import org.aspectj.weaver.patterns.IToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.service.annotation.PostExchange;

import java.util.List;

@RestController
@RequestMapping("/api/issues")
public class IssueController {

    @Autowired
    private IssueService issueService;

    @Autowired
    private UserService userService;

    @GetMapping("/project/{issueId}")
    public ResponseEntity<List<Issue>> getIssueByProjectId(@PathVariable Long projectId) throws Exception{
        return ResponseEntity.ok(issueService.getIssueByProjectId(projectId));
    }

    @GetMapping("/{projectId}")
    public ResponseEntity<Issue> getIssuByProjectId(@PathVariable Long projectId) throws Exception{
        return ResponseEntity.ok(issueService.getIssueById(projectId));
    }


    @PostMapping
    public ResponseEntity<IssueDTO> createIssue(
            @RequestBody IssueRequest issue,
            @RequestHeader("Authorization") String token)throws Exception{
        User tokenUser = userService.findUserProfileByJwt(token);
        User user = userService.findUserById(tokenUser.getId());

       Issue createIssue = issueService.createIssue(issue,tokenUser);
       IssueDTO issueDTO = new IssueDTO();
       issueDTO.setDescription(createIssue.getDescription());
       issueDTO.setDueDate(createIssue.getDueDate());
       issueDTO.setId(createIssue.getId());
       issueDTO.setPriority(createIssue.getPriority());
       issueDTO.setProject(createIssue.getProject());
       issueDTO.setProjectId(createIssue.getProjectID());
       issueDTO.setStatus(createIssue.getStatus());
       issueDTO.setTitle(createIssue.getTitle());
       issueDTO.setTags(createIssue.getTags());
       issueDTO.setAssignee(createIssue.getAssignee());

       return ResponseEntity.ok(issueDTO);

    }


    @DeleteMapping("/{issueId}")
    public ResponseEntity<MessageResponse> deleteIssue(@PathVariable Long issueId, @RequestHeader("Authorization") String token)throws Exception{
        User user = userService.findUserProfileByJwt(token);
        String deleted = issueService.deleteIssue(issueId,user.getId());
        MessageResponse res = new MessageResponse();
        res.setMessage("Issue Deleted");

        return ResponseEntity.ok(res);
    }

    @PutMapping("/{issueId}/assignee/{userId}")
    public ResponseEntity<Issue> addUserToIssue(@PathVariable Long issueId,@PathVariable Long userId)throws Exception{

        Issue issue = issueService.addUserToIssue(issueId,userId);
        return ResponseEntity.ok(issue);
    }

    @PutMapping("/{issueId}/status/{status}")
    public ResponseEntity<Issue> updateIssueStatus(
            @PathVariable Long issueId,
            @RequestHeader("Authorization") String token,
            @PathVariable String status
    )throws Exception{
        Issue issue = issueService.updateToStatus(issueId,status);
        return ResponseEntity.ok(issue);


    }



}
