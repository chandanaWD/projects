package com.sic.SIC.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class DesResponse {
    private int id;
    private String name;
    private List<DesDesResponse> decision;
}
