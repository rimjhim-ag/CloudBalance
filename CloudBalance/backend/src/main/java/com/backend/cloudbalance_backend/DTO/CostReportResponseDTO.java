package com.backend.cloudbalance_backend.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Map;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CostReportResponseDTO {



    private String groupBy;


   private Map<String,BigDecimal> monthlyCost;













}
