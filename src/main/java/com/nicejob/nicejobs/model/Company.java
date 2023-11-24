package com.nicejob.nicejobs.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Component
public class Company {
    private String id;
    private String title;
    private String description;
    private Address address;
    private String numOfEmployees;
    private CompanyStatus companyStatus;
    private String logoImage;
    private String coverImage;
    private String email;
    private String website;
}
