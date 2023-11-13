package com.nicejob.nicejobs.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Component
public class JobDescription {
    private String id;
    private List<String> jobDescriptions;
    private List<String> employeeRequirements;
    private List<String> benefits;
    private Address skills;

}
