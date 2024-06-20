package com.project.Project.Management.System.service;

import com.project.Project.Management.System.modal.Chat;
import com.project.Project.Management.System.modal.Message;
import com.project.Project.Management.System.modal.Project;
import com.project.Project.Management.System.modal.User;
import com.project.Project.Management.System.repository.MessageRepository;
import com.project.Project.Management.System.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.Local;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;


@Service
public class MessgeServiceImpl implements MessageService{

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProjectService projectService;
    @Override
    public Message sendMessage(Long senderId, Long projectId, String content) throws Exception {
        User sender = userRepository.findById(senderId)
                .orElseThrow(()-> new Exception("User not found with id:"+senderId));
        Chat chat = projectService.getProjectById(projectId).getChat();


        Message message = new Message();
        message.setContent(content);
        message.setChat(chat);
        message.setSender(sender);
        message.setCreatedAt(LocalDateTime.now());
        Message savedMessage= messageRepository.save(message);

        chat.getMessages().add(savedMessage);
        return savedMessage;

    }

    @Override
    public List<Message> getMessagesByProjectId(Long projectId) throws Exception {
        Chat chat = projectService.getChatByProjectId(projectId);
        List<Message> findByChatIdOrderByCreatedAtAsc = messageRepository.findByChatIdOrderByCreatedAtAsc(chat.getId());
        return findByChatIdOrderByCreatedAtAsc;
    }
}
