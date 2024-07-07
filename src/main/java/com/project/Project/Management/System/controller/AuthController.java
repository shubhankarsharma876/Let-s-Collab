package com.project.Project.Management.System.controller;


import com.project.Project.Management.System.Request.LoginRequest;
import com.project.Project.Management.System.config.JwtProvider;
import com.project.Project.Management.System.modal.User;
import com.project.Project.Management.System.repository.UserRepository;
import com.project.Project.Management.System.response.AuthResponse;
import com.project.Project.Management.System.service.CustomUserDetailImpl;
import com.project.Project.Management.System.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.security.Security;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private CustomUserDetailImpl customUserDetail;

    @Autowired
    private SubscriptionService subscriptionService;

//    @PostMapping("/signup")
//    public ResponseEntity<User> createUserHandler(@RequestBody User user) throws Exception {
//        User isUserExist=userRepository.findByEmail(user.getEmail());
//
//        if(isUserExist!=null){
//            throw new Exception("email already exists with other account");
//        }
//
//        User createdUser = new User();
//        createdUser.setPassword(passwordEncoder.encode(user.getPassword()));
//        createdUser.setEmail(user.getEmail());
//        createdUser.setFullName(user.getFullName());
//
//        User savedUser=userRepository.save(createdUser);
//
//        subscriptionService.createSubscription(savedUser);
//
//        Authentication authentication = new UsernamePasswordAuthenticationToken(user.getEmail(),user.getPassword());
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//
//        String jwt = JwtProvider.generateToken(authentication);
//
//        AuthResponse res = new AuthResponse();
//        res.setMessage("Signup success");
//        res.setJwt(jwt);
//        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
//    }


    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) throws Exception {
        User isUserExist=userRepository.findByEmail(user.getEmail());

        if(isUserExist!=null){
            throw new Exception("email already exists with other account");
        }

        User createdUser = new User();
        createdUser.setPassword(passwordEncoder.encode(user.getPassword()));
        createdUser.setEmail(user.getEmail());
        createdUser.setFullName(user.getFullName());

        User savedUser=userRepository.save(createdUser);

        subscriptionService.createSubscription(savedUser);

        Authentication authentication = new UsernamePasswordAuthenticationToken(user.getEmail(),user.getPassword());
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = JwtProvider.generateToken(authentication);

        AuthResponse res = new AuthResponse();
        res.setMessage("Signup success");
        res.setJwt(jwt);
        return new ResponseEntity<>(res, HttpStatus.CREATED);
    }


    @PostMapping("/signing")
    public ResponseEntity<AuthResponse> signing(@RequestBody LoginRequest loginRequest){

        String username=loginRequest.getEmail();
        String password = loginRequest.getPassword();

        Authentication authentication = authenticate(username,password);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = JwtProvider.generateToken(authentication);

        AuthResponse res = new AuthResponse();
        res.setMessage("Signup success");
        res.setJwt(jwt);
        return new ResponseEntity<>(res, HttpStatus.CREATED);
    }

    private Authentication authenticate(String username, String password) {

        UserDetails userDetails=customUserDetail.loadUserByUsername(username);

        if(userDetails==null){
            throw new BadCredentialsException("invalid username");
        }

        if(!passwordEncoder.matches(password,userDetails.getPassword())){
            throw new BadCredentialsException("invalid password");
        }

        return new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
    }

}
