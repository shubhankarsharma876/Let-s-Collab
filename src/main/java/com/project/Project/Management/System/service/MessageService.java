package com.project.Project.Management.System.service;

import com.project.Project.Management.System.modal.Message;

import java.util.List;

public interface MessageService {

    Message sendMessage(Long sendId, Long ChatId, String content) throws Exception;

    List<Message> getMessagesByProjectId(Long projectId) throws Exception;
}
