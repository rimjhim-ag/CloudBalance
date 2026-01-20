package com.backend.cloudbalance_backend.controller;


import com.backend.cloudbalance_backend.DTO.CostReportRequestDTO;
import com.backend.cloudbalance_backend.DTO.CostReportResponseDTO;
import com.backend.cloudbalance_backend.service.CostReportService;
import com.backend.cloudbalance_backend.type.Filter;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Set;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class CostReportController {


    private final CostReportService costReportService;


    @PostMapping("/cost/report")
    public List<CostReportResponseDTO> getCostReport(
          @Valid @RequestBody CostReportRequestDTO  costReportRequestDTO

            ) {
        return costReportService.getCostReport(costReportRequestDTO);
    }

    @GetMapping("/cost/filters")
    public Map<String, Set<String>> getAllFilters(){

            return costReportService.getAllFilters();
    }

}
