package com.backend.cloudbalance_backend.repositories;


import com.backend.cloudbalance_backend.entity.Accounts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountRepository extends JpaRepository<Accounts,Integer> {

    List<Accounts> findByUsers_UsersId(Integer usersId);

    boolean existsByAccountId(Long accountId);

    boolean existsByARN(String ARN);
}
