package com.sic.SIC.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class CauseListResponseDTO {

    private Long id;
    private String commissionerName;
    private Date dateOfHearing;          // Changed to Date to match the entity type
    private String causelistName;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
