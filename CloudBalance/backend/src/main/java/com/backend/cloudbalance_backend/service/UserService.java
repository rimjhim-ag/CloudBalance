package com.backend.cloudbalance_backend.service;


import com.backend.cloudbalance_backend.DTO.*;
import com.backend.cloudbalance_backend.entity.Accounts;
import com.backend.cloudbalance_backend.entity.Users;
import com.backend.cloudbalance_backend.repositories.AccountRepository;
import com.backend.cloudbalance_backend.repositories.UserRepository;
import com.backend.cloudbalance_backend.type.Role;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {


    private final UserRepository userRepository;
    private final AccountRepository accountRepository;

    private final PasswordEncoder passwordEncoder;



    public List<UserResponseDTO> getUsers() {


        List<Users> usersList = userRepository.findAll();




        return usersList.stream()
                .map(u -> UserResponseDTO.builder()
                        .usersId(u.getUsersId())
                        .email(u.getEmail())
                        .role(u.getRole())
                        .firstName(u.getFirstName())
                        .lastName(u.getLastName())
                        .build()
                )
                .toList();


    }

    @Transactional
    public void addUser(AddUserRequestDTO userdata) {


        String hashedPassword = passwordEncoder.encode(userdata.getPassword());


        Users user = new Users();

        if (userRepository.existsByEmail(userdata.getEmail())) {
            throw new ResponseStatusException(
                    HttpStatus.CONFLICT,
                    "Email already exists"
            );
        }

        user.setFirstName(userdata.getFirstName());
        user.setLastName(userdata.getLastName());
        user.setEmail(userdata.getEmail());
        user.setRole(userdata.getRole());
        user.setPassword(hashedPassword);



        List<Accounts> accounts = validateAndGetCustomerAccounts(userdata.getRole(), userdata.getAccountIds());
        if (accounts != null) user.setAccounts(accounts);

        userRepository.save(user);




    }


    public UserResponseDTO getUserById(int id) {

        Users u = userRepository.findById(id).orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND,
                "User not found"
        ));

        return UserResponseDTO.builder()
                .usersId(u.getUsersId())
                .email(u.getEmail())
                .role(u.getRole())
                .firstName(u.getFirstName())
                .lastName(u.getLastName())
                .build();


    }

    @Transactional
    public void updateUser(int id, UpdateUserRequestDTO updateUserRequestDTO) {


        Users u = userRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "User not found"
                ));


        u.setEmail(updateUserRequestDTO.getEmail());
        u.setFirstName(updateUserRequestDTO.getFirstName());
        u.setLastName(updateUserRequestDTO.getLastName());
        u.setRole(updateUserRequestDTO.getRole());


        List<Accounts> accounts = validateAndGetCustomerAccounts(updateUserRequestDTO.getRole(), updateUserRequestDTO.getAccountIds());
        if (accounts != null) u.setAccounts(accounts);





        userRepository.save(u);
    }


    @Transactional
    public List<GetAccountResponseDTO> getAccountsByUserId(int userId) {

        Users user = userRepository.findById(userId)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "User not found"
                ));


        return user.getAccounts().stream()
                .map(acc -> new GetAccountResponseDTO(
                        acc.getId(),
                        acc.getAccountName(),
                        acc.getAccountId()

                ))
                .toList();
    }


    public UserProfileResponseDTO getUserProfile(){


        Authentication auth =
                SecurityContextHolder.getContext().getAuthentication();

        if (auth == null || !auth.isAuthenticated()) {
            throw new AccessDeniedException("User not authenticated");
        }

        Users user = (Users) auth.getPrincipal();

        return new UserProfileResponseDTO(
                user.getUsersId(),
                user.getFirstName() + ' ' + user.getLastName(),
                user.getEmail(),
                user.getRole()
        );

    }


    private List<Accounts> validateAndGetCustomerAccounts(Role role, List<Integer> accountIds) {
        if (role != Role.CUSTOMER) return null;


        if (accountIds == null || accountIds.isEmpty()) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "Customer must have at least one account assigned"
            );
        }


        List<Accounts> accounts = accountRepository.findAllById(accountIds);


        if (accounts.size() != accountIds.size()) {
            throw new ResponseStatusException(
                    HttpStatus.UNPROCESSABLE_ENTITY,
                    "One or more account IDs are invalid"
            );
        }

        return accounts;


}}
