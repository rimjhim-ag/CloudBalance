package com.backend.cloudbalance_backend.service;


import com.backend.cloudbalance_backend.DTO.AccountRequestDTO;
import com.backend.cloudbalance_backend.DTO.GetAccountResponseDTO;
import com.backend.cloudbalance_backend.DTO.UserProfileResponseDTO;
import com.backend.cloudbalance_backend.entity.Accounts;
import com.backend.cloudbalance_backend.entity.Users;
import com.backend.cloudbalance_backend.repositories.AccountRepository;
import com.backend.cloudbalance_backend.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AccountService {

    private final AccountRepository accountRepository;
    private final UserRepository userRepository;

    public void addAccount(AccountRequestDTO accountRequestDTO) {

        if (accountRepository.existsByAccountId(accountRequestDTO.getAccountId())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Account ID already exists");
        }

        if (accountRepository.existsByARN(accountRequestDTO.getARN())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Account ARN already exists");
        }


        Accounts a = new Accounts();

        a.setAccountId(accountRequestDTO.getAccountId());
        a.setAccountName(accountRequestDTO.getAccountName());
        a.setARN(accountRequestDTO.getARN());

        accountRepository.save(a);
    }

    public List<GetAccountResponseDTO> getAllAccounts() {

        List<Accounts> accountsList = accountRepository.findAll();

        return accountsList.stream().map(a -> GetAccountResponseDTO.builder()
                .Id(a.getId())
                .accountId(a.getAccountId())
                .accountName(a.getAccountName())
                .build()).toList();
    }

    public List<GetAccountResponseDTO> getMyAccounts() {

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Users user = (Users) auth.getPrincipal();

        List<Accounts> accounts =
                accountRepository.findByUsers_UsersId(user.getUsersId());

        return accounts.stream()
                .map(acc -> new GetAccountResponseDTO(
                        acc.getId(),
                        acc.getAccountName(),
                        acc.getAccountId()
                ))
                .toList();
    }

}
