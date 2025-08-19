package com.sic.SIC.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class DesDesResponse {
    private String year;
    private List<IdValProjection> decisionList;
}
