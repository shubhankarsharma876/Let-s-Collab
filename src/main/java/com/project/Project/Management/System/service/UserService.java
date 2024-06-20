package com.project.Project.Management.System.service;

import com.project.Project.Management.System.modal.User;


public interface UserService {
    User findUserProfileByJwt(String jwt) throws Exception;

    User findUserByEmail(String email) throws Exception;

    User findUserById(Long Id) throws Exception;

    User updateUsersProjectSize(User user, int number);
}
