package com.sic.SIC.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommisssionerSecondResponse {
    private int id;
    private String name;
    private String designation;
    private Long seniority;       // Use Long for seniority
    private String shortname;
    private Long status;           // Use Long for status
}



