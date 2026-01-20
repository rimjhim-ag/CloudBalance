package com.backend.cloudbalance_backend.DTO;


import com.backend.cloudbalance_backend.helper.AuthUtil;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class LogoutRequestDTO {

   private String token;





}
