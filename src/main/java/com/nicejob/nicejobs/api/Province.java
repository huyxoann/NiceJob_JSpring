package com.nicejob.nicejobs.api;

import lombok.Getter;

@Getter
public enum Province {
    ITEM1("Value1"),
    ITEM2("Value2"),
    ITEM3("Value3");

    private final String value;

    Province(String value) {
        this.value = value;
    }

}
