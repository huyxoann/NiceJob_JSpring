package com.nicejob.nicejobs.service;

import com.nicejob.nicejobs.model.Job;
import com.nicejob.nicejobs.model.User;
import com.nicejob.nicejobs.model.dto.JobDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface JobService {
    public List<JobDTO> getListJob();
    public Job getJobById(String id);

    public List<JobDTO> searchJobs(String keywords);
}
