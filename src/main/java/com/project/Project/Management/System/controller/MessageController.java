package com.project.Project.Management.System.controller;


import com.project.Project.Management.System.Request.CreateMessageRequest;
import com.project.Project.Management.System.modal.Chat;
import com.project.Project.Management.System.modal.Message;
import com.project.Project.Management.System.modal.Project;
import com.project.Project.Management.System.modal.User;
import com.project.Project.Management.System.repository.MessageRepository;
import com.project.Project.Management.System.service.MessageService;
import com.project.Project.Management.System.service.ProjectService;
import com.project.Project.Management.System.service.UserService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @Autowired
    private UserService userService;

    @Autowired
    private ProjectService projectService;

    @PostMapping("/send")
    public ResponseEntity<Message> sendMessage(@RequestBody CreateMessageRequest request)throws Exception{
        User user = userService.findUserById(request.getSenderId());
        if(user==null) throw new Exception("User not found with id:"+request.getSenderId());

        Chat chats = projectService.getProjectById(request.getProjectId()).getChat();
        if(chats==null) {
            throw new Exception("Chats not found");
        }

        Message sendMessage = messageService.sendMessage(request.getSenderId(),
                request.getProjectId(),request.getContent());

        return ResponseEntity.ok(sendMessage);
    }


    @GetMapping("/chat/{projectId}")
    public ResponseEntity<List<Message>> getMessagesByChatId(@PathVariable Long projectId)throws Exception{
        List<Message> messages = messageService.getMessagesByProjectId(projectId);
        return ResponseEntity.ok(messages);

    }


}
