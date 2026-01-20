package com.backend.cloudbalance_backend.controller;


import com.backend.cloudbalance_backend.DTO.*;
import com.backend.cloudbalance_backend.entity.Users;
import com.backend.cloudbalance_backend.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController

@RequestMapping("/api")
public class UserController {


    @Autowired
    UserService userService;


    @GetMapping("/users")

    @PreAuthorize("!hasRole('CUSTOMER')")
    public ResponseEntity<List<UserResponseDTO>> getUsers() {


        return (new ResponseEntity<>(userService.getUsers(), HttpStatus.OK));


    }

    @PostMapping("/users")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> addUser(@Valid @RequestBody AddUserRequestDTO userdata) {


        userService.addUser(userdata);

        return (new ResponseEntity<>("User added successfully", HttpStatus.CREATED));


    }

    @GetMapping("/user/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<UserResponseDTO> getUsersById(@PathVariable int id) {


        return (new ResponseEntity<>(userService.getUserById(id), HttpStatus.OK));


    }

    @PutMapping("/user/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> updateUser(@PathVariable int id, @Valid @RequestBody UpdateUserRequestDTO updateUserRequestDTO) {


        userService.updateUser(id, updateUserRequestDTO);

        return (new ResponseEntity<>("User updated successfully", HttpStatus.OK));


    }


    @GetMapping("/user/profile")

    public ResponseEntity<UserProfileResponseDTO> getUserProfile(){



          return (new ResponseEntity<>(userService.getUserProfile(), HttpStatus.OK));

    }

    @GetMapping("/users/{userId}/accounts")
    @PreAuthorize("hasRole('ADMIN')")
    public List<GetAccountResponseDTO> getUserAccounts(@PathVariable int userId) {
        return userService.getAccountsByUserId(userId);
    }


}
