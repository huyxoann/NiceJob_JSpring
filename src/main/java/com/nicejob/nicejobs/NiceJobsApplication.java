package com.nicejob.nicejobs;

import com.nicejob.nicejobs.model.*;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.sql.Timestamp;
import java.util.ArrayList;

@SpringBootApplication
public class NiceJobsApplication {

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(NiceJobsApplication.class, args);


    }

}
