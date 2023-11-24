package com.nicejob.nicejobs.model.mapper;

import com.nicejob.nicejobs.model.Job;
import com.nicejob.nicejobs.model.dto.JobDTO;

public class JobMapper {
    public static JobDTO toJobDTO(Job job) {
        JobDTO temp = new JobDTO();
        temp.setId(job.getId());
        temp.setTitle(job.getTitle());
        temp.setDescription(job.getDescription());
        temp.setInfo(job.getInfo());
        temp.setCareerList(job.getCareerList());
        temp.setCompanyID(job.getCompanyID());
        return temp;
    }
}
