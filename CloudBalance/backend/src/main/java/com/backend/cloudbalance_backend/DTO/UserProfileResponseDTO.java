package com.backend.cloudbalance_backend.DTO;


import com.backend.cloudbalance_backend.type.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserProfileResponseDTO {

    private Integer usersId;
    private String username;
    private String email;
    private Role role;

}
