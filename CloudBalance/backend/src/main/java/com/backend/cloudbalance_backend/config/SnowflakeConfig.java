package com.backend.cloudbalance_backend.config;



import com.backend.cloudbalance_backend.helper.SnowflakeProperties;
import com.snowflake.snowpark_java.Session;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class SnowflakeConfig {

    private final SnowflakeProperties properties;

    public SnowflakeConfig(SnowflakeProperties properties) {
        this.properties = properties;
    }

    @Bean
    public Session snowparkSession() {
        Map<String, String> connectionProps = new HashMap<>();
        connectionProps.put("URL", "https://" + properties.getAccount() + ".snowflakecomputing.com");
        connectionProps.put("USER", properties.getUser());
        connectionProps.put("PASSWORD", properties.getPassword());
        connectionProps.put("WAREHOUSE", properties.getWarehouse());
        connectionProps.put("DB", properties.getDatabase());
        connectionProps.put("SCHEMA", properties.getSchema());

        return Session.builder().configs(connectionProps).create();
    }
}
