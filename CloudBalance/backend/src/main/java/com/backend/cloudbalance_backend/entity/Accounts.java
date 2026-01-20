package com.backend.cloudbalance_backend.entity;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "accounts_table")
public class Accounts {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Id;


    @Column(nullable = false, unique = true)
    private Long accountId;


    @NotBlank
    @Column(nullable = false)
    private String accountName;


    @NotBlank
    @Column(nullable = false, unique = true)
    private String ARN;


    @ManyToMany(mappedBy = "accounts")
    private List<Users> users;


}
