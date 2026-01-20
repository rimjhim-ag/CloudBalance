package com.backend.cloudbalance_backend.DTO;


import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.apache.coyote.Response;
import org.hibernate.validator.constraints.Length;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AccountRequestDTO {



    @NotNull
    @Min(100000000000L)
    @Max(999999999999L)
    private Long accountId;


    @NotBlank
    private String accountName;


    @NotBlank
    private String ARN;

}
