package com.nicejob.nicejobs.model.dto;

import com.nicejob.nicejobs.model.Career;
import com.nicejob.nicejobs.model.JobDescription;
import com.nicejob.nicejobs.model.JobGeneralInfo;
import com.nicejob.nicejobs.model.JobStatus;
import lombok.*;
import org.springframework.stereotype.Component;

import java.util.List;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Component
public class JobDTO {
    private String id;
    private String title;
    private JobDescription description;
    private JobGeneralInfo info;
    private String companyID;
    private List<Career> careerList;
    private JobStatus status;
}
