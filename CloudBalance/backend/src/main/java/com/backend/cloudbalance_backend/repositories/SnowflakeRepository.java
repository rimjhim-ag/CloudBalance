package com.backend.cloudbalance_backend.repositories;



import com.snowflake.snowpark_java.Row;
import com.snowflake.snowpark_java.Session;
import org.springframework.stereotype.Repository;

import java.util.Arrays;
import java.util.List;


@Repository

public class SnowflakeRepository {

    private final Session session;

    public SnowflakeRepository(Session session) {
        this.session = session;
    }

    public List<Row> execute(String sql) {
        return Arrays.asList(session.sql(sql).collect());
    }




}
