package com.backend.cloudbalance_backend.DTO;


import com.backend.cloudbalance_backend.type.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponseDTO {

   private String authToken;
   private String refreshToken;
   private Role role;



}
