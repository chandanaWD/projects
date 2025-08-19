package com.sic.SIC.dto;

import java.time.LocalDateTime;

public interface DecisionProjection {
    Integer getId();
    String getCommissioner_name();
    String getYear();
    String getQuarter();
    String getDecisions_file();
    LocalDateTime getCreated_at();
}
