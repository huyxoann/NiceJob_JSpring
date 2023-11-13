package com.nicejob.nicejobs.service;

import com.nicejob.nicejobs.exception.NotFoundException;
import com.nicejob.nicejobs.model.*;
import com.nicejob.nicejobs.model.dto.JobDTO;
import com.nicejob.nicejobs.model.mapper.JobMapper;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Component
public class JobServiceImpl implements JobService {
    private static final ArrayList<Job> jobs = new ArrayList<Job>();

    static{
        jobs.add(new Job("1", "IT Job", new JobDescription(), new JobGeneralInfo(), "Company IT", new ArrayList<Career>(), JobStatus.Value1, new Timestamp(1)));
        jobs.add(new Job("2", "BA Job", new JobDescription(), new JobGeneralInfo(), "Company IT", new ArrayList<Career>(), JobStatus.Value1, new Timestamp(1)));
    }

    @Override
    public List<JobDTO> getListJob() {
        List<JobDTO> result = new ArrayList<JobDTO>();

        for(Job job:jobs){
            result.add(JobMapper.toJobDTO(job));
        }
        return result;
    }

    @Override
    public Job getJobById(String id) {
        for(Job job:jobs){
            if(job.getId().equals(id)){
                return job;
            }
        }
        throw new NotFoundException("Job không tồn tại trong hệ thống");
    }

    @Override
    public List<JobDTO> searchJobs(String keyword) {
        List<JobDTO> result = new ArrayList<JobDTO>();
        for(Job job :jobs){
            if(job.getTitle().contains(keyword)){
                result.add(JobMapper.toJobDTO(job));
            }
        }
        return result;
    }
}
