package com.nicejob.nicejobs.controller;

import com.nicejob.nicejobs.model.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Timestamp;
import java.util.ArrayList;

@Controller
public class MainController {
    @GetMapping("/")
    public String home() {
        return "index";
    }



}
