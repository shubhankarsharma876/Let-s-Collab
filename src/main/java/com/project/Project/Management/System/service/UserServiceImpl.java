package com.project.Project.Management.System.service;


import com.project.Project.Management.System.config.JwtProvider;
import com.project.Project.Management.System.modal.User;
import com.project.Project.Management.System.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{


    @Autowired
    private UserRepository userRepository;
    @Override
    public User findUserProfileByJwt(String jwt) throws Exception {
        String email = JwtProvider.getEmailFromToken(jwt);
        return findUserByEmail(email) ;
    }

    @Override
    public User findUserByEmail(String email) throws Exception {

        User user=userRepository.findByEmail(email);
        if(user==null){
            throw new Exception("User Not Found");
        }
        return user;
    }

    @Override
    public User findUserById(Long userId) throws Exception {


//        The Optional class in Java 8 is used to represent the presence or absence of a value. It is often used as a
//        method return type to indicate that a method may return a value, or it may return null. The Optional class
//        provides a number of methods that can be used to safely check for the presence of a value, and to get the
//        value if it is present.

        Optional<User> optionalUser=userRepository.findById(userId);
        if(optionalUser.isEmpty()){
            throw new Exception("User not found by Id");
        }
        return optionalUser.get();
    }

    @Override
    public User updateUsersProjectSize(User user, int number) {
        user.setProjectSize(user.getProjectSize()+number);

        return userRepository.save(user);
    }
}
