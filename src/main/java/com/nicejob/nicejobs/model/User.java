package com.nicejob.nicejobs.model;

import java.sql.Timestamp;
import java.util.Date;

public class User {
    private String id;
    private String username;
    private String password;
    private String loginToken;
    private UserDetail userDetail;
    private UserBio userBio;
    private Timestamp createdAt;
}
