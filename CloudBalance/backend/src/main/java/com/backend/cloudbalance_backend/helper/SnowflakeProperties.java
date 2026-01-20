package com.backend.cloudbalance_backend.helper;



import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@Getter
@Setter
@ConfigurationProperties(prefix = "snowflake")
public class SnowflakeProperties {

    private String account;
    private String user;
    private String password;
    private String warehouse;
    private String database;
    private String schema;


}

