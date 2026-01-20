package com.backend.cloudbalance_backend.DTO;


import com.backend.cloudbalance_backend.entity.Accounts;
import com.backend.cloudbalance_backend.type.Role;
import lombok.Builder;
import lombok.Data;

import java.util.List;


@Builder
@Data
public class UserResponseDTO {

    private Integer usersId;


    private String firstName;

    private String lastName;


    private String email;



    private Role role;


    private List<Accounts> accounts;





}
