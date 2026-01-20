package com.backend.cloudbalance_backend.repositories;

import com.backend.cloudbalance_backend.entity.Users;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import java.util.List;
import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<Users, Integer> {


    Optional<Users> findByEmail(String username);
    boolean existsByEmail(String email);







//    @Transactional
//    @Modifying
//    @Query("UPDATE Users u SET u.firstName = :name where u.id = :id")
//     int updateName(@Param("name") String name, @Param("id") int id);
}
