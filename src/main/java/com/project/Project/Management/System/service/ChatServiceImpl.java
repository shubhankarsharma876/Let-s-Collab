package com.project.Project.Management.System.service;

import com.project.Project.Management.System.modal.Chat;
import com.project.Project.Management.System.repository.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatServiceImpl implements ChatService{

    @Autowired
    private ChatRepository chatRepository;

    @Override
    public Chat createChat(Chat chat){

        return chatRepository.save(chat);
    }
}
