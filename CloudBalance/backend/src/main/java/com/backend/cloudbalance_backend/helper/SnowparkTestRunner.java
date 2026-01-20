package com.backend.cloudbalance_backend.helper;

import com.backend.cloudbalance_backend.repositories.SnowflakeRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;


//@Component
public class SnowparkTestRunner {

    private final SnowflakeRepository repository;

    public SnowparkTestRunner(SnowflakeRepository repository) {
        this.repository = repository;
    }

//    @PostConstruct
//    public void run() {
//        repository.showCurrentUser();
//        System.out.println(" Snowpark connection is working!");
//    }
}
