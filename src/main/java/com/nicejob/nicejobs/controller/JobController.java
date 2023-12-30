package com.nicejob.nicejobs.controller;

import com.nicejob.nicejobs.exception.NotFoundException;
import com.nicejob.nicejobs.model.Job;
import com.nicejob.nicejobs.model.dto.JobDTO;
import com.nicejob.nicejobs.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jobs")
public class JobController {
    @Autowired
    private JobService jobService;
    @GetMapping(path = "")
    public ResponseEntity<?> getListJob(){
        List<JobDTO> jobs = jobService.getListJob();

        return ResponseEntity.ok(jobs);
    }

    @GetMapping(path = "/{jobId}")
    public ResponseEntity<?> getJobById(@PathVariable  String jobId){
        Job job = jobService.getJobById(jobId);
        return ResponseEntity.ok(job);
    }

    @GetMapping(path = "/search")
    public ResponseEntity<?> searchJobByKeyword(@RequestParam(required = false, defaultValue = "") String keyword){
        List<JobDTO> jobs = jobService.searchJobs(keyword);
        return ResponseEntity.ok(jobs);
    }
}
