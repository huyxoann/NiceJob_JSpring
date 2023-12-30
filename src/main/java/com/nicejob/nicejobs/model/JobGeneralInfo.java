package com.nicejob.nicejobs.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Component
public class JobGeneralInfo {
    private Level level;
    private Experience experience;
    private Integer numOfRecruits;
    private WorkForm workForm;
    private Gender gender;
    private Double salary;
    private Timestamp expiredDate;
}
