package com.nicejob.nicejobs.model;

import com.nicejob.nicejobs.api.Province;
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
public class Address {
    private String id;
    private Province province;
    private String address;
}
