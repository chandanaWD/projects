package com.sic.SIC.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.sql.Date;
import java.time.LocalDateTime;

public interface CauseListProjection {

    int getId();
    int getCommissioner_name();

    @JsonFormat(pattern = "yyyy-MM-dd")
    Date getDate_of_hearing();
}
