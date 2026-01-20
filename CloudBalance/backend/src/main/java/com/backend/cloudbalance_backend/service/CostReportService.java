package com.backend.cloudbalance_backend.service;


import com.backend.cloudbalance_backend.DTO.CostReportRequestDTO;
import com.backend.cloudbalance_backend.DTO.CostReportResponseDTO;
import com.backend.cloudbalance_backend.repositories.SnowflakeRepository;
import com.backend.cloudbalance_backend.type.Filter;
import com.snowflake.snowpark_java.Row;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CostReportService {

    private final SnowflakeRepository snowflakeRepository;

    public List<CostReportResponseDTO> getCostReport(CostReportRequestDTO request) {

        String groupByColumn = request.getGroupBy().name();

        StringBuilder sql = new StringBuilder("""
                    SELECT %s AS group_by,
                           TO_CHAR(DATE_TRUNC('MONTH', BILL_DATE), 'Mon YYYY') AS BILL_MONTH,
                           SUM(COST) AS COST
                    FROM COST_REPORT
                    WHERE 1=1
                """.formatted(groupByColumn));


        sql.append("""
                    AND BILL_DATE BETWEEN '%s' AND '%s'
                """.formatted(request.getStartDate(), request.getEndDate()));


        if (request.getAccountId() != null) {
            sql.append(" AND ACCOUNT_ID = ").append(request.getAccountId());
        }

        if (request.getFilters() != null && !request.getFilters().isEmpty()) {
            request.getFilters().forEach((filter, values) -> {
                if (values != null && !values.isEmpty()) {

                    String inClause = values.stream()
                            .map(v -> "'" + v + "'")
                            .reduce((a, b) -> a + ", " + b)
                            .orElse("");

                    sql.append(" AND ")
                            .append(filter.name())
                            .append(" IN (")
                            .append(inClause)
                            .append(")");
                }
            });
        }

        sql.append("""
                    GROUP BY %s, BILL_MONTH
                    ORDER BY %s, BILL_MONTH
                """.formatted(groupByColumn, groupByColumn));

        List<Row> rows = snowflakeRepository.execute(sql.toString());

        Map<String, Map<String, BigDecimal>> temp = new LinkedHashMap<>();

        for (Row row : rows) {
            Object groupByObj = row.get(0);
            String groupBy = groupByObj != null ? groupByObj.toString() : null;

            String month = row.getString(1);
            BigDecimal cost = BigDecimal.valueOf(row.getLong(2));

            temp.computeIfAbsent(groupBy, k -> new LinkedHashMap<>())
                    .put(month, cost);
        }

        List<CostReportResponseDTO> result = new ArrayList<>();
        temp.forEach((k, v) -> result.add(new CostReportResponseDTO(k, v)));

        return result;
    }



    public Map<String, Set<String>> getAllFilters() {

        // 1️⃣ Columns from enum
        String columns = Arrays.stream(Filter.values())
                .map(Enum::name)
                .collect(Collectors.joining(", "));

        // 2️⃣ SQL query
        String sql = "SELECT DISTINCT " + columns + " FROM COST_REPORT";

        // 3️⃣ Fetch rows
        List<Row> rows = snowflakeRepository.execute(sql);

        // 4️⃣ Initialize result map
        Map<String, Set<String>> filters = new LinkedHashMap<>();
        for (Filter filter : Filter.values()) {
            filters.put(filter.name(), new LinkedHashSet<>());
        }

        // 5️⃣ Populate map
        for (Row row : rows) {
            for (int i = 0; i < Filter.values().length; i++) {
                Object value = row.get(i);
                if (value != null) {
                    filters.get(Filter.values()[i].name())
                            .add(value.toString());
                }
            }
        }

        return filters;
    }


}



