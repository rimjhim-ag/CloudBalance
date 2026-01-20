package com.backend.cloudbalance_backend.DTO;

import com.backend.cloudbalance_backend.type.Filter;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CostReportRequestDTO {



    @NotNull
    private Filter groupBy;

    private Map<Filter, List<String>> filters;

    private Long accountId;

    @NotNull
    private LocalDate startDate;

    @NotNull
    private LocalDate endDate;
}

