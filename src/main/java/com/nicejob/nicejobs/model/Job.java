package com.nicejob.nicejobs.model;

import lombok.*;
import org.springframework.stereotype.Component;
import java.sql.Timestamp;
import java.util.List;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Component
public class Job {
    private String id;
    private String title;
    private JobDescription description;
    private JobGeneralInfo info;
    private String companyID;
    private List<Career> careerList;
    private JobStatus status;
    private Timestamp createdAt;
}
