package com.backend.cloudbalance_backend.repositories;


import com.backend.cloudbalance_backend.entity.RevokedTokens;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface RevokedTokenRepository extends JpaRepository<RevokedTokens, Integer> {


    Optional<RevokedTokens> findByToken(String token);
}
