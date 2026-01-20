package com.backend.cloudbalance_backend.controller;


import com.backend.cloudbalance_backend.DTO.AccountRequestDTO;
import com.backend.cloudbalance_backend.DTO.GetAccountResponseDTO;
import com.backend.cloudbalance_backend.service.AccountService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import net.snowflake.client.jdbc.internal.google.api.Http;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class AccountController {

    private final AccountService accountService;

    @PostMapping("/accounts")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> account(@RequestBody @Valid AccountRequestDTO accountRequestDTO){


        accountService.addAccount(accountRequestDTO);
        return (new ResponseEntity<>("Account added successfully", HttpStatus.CREATED));

    }


    @GetMapping("/accounts")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<GetAccountResponseDTO>> account(){



        return (new ResponseEntity<>(accountService.getAllAccounts(), HttpStatus.OK));

    }


    @GetMapping("/me/accounts")
    public ResponseEntity<List<GetAccountResponseDTO>> getMyAccount(){



        return (new ResponseEntity<>(accountService.getMyAccounts(), HttpStatus.OK));

    }



}
