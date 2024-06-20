package com.project.Project.Management.System.service;


import jakarta.mail.MessagingException;
import org.springframework.stereotype.Service;


public interface EmailService {

    void sendEmailWithToken(String usreEmail,String Link) throws MessagingException;
}
