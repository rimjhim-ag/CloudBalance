package com.backend.cloudbalance_backend.controller;


import com.backend.cloudbalance_backend.DTO.LoginRequestDTO;
import com.backend.cloudbalance_backend.DTO.LoginResponseDTO;
import com.backend.cloudbalance_backend.DTO.LogoutRequestDTO;
import com.backend.cloudbalance_backend.DTO.RefreshResponseDTO;
import com.backend.cloudbalance_backend.service.AuthService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {


    @Autowired
    AuthService auth;


    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody LoginRequestDTO loginRequestDto, HttpServletResponse response) {


        return ResponseEntity.ok(auth.login(loginRequestDto, response));


    }


    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest request, HttpServletResponse response) {


        auth.logout(request, response);
        return (new ResponseEntity<>("Logout Successfully", HttpStatus.NO_CONTENT));
    }


    @PostMapping("/refresh")
    public ResponseEntity<RefreshResponseDTO> refresh(HttpServletRequest request) {

        return ResponseEntity.ok(auth.refresh(request));
    }




}
