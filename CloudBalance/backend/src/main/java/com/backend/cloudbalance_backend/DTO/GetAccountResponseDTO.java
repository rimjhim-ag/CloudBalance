package com.backend.cloudbalance_backend.DTO;


import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class GetAccountResponseDTO {


    private Integer Id;

    private String accountName;

    private Long accountId;
}
