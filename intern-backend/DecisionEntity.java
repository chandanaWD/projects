package com.sic.SIC.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name="decisions",schema = "public")
public class DecisionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int commissioner_name;
    private  String year;
    private String quarter;
    private String decisions_file;
    private LocalDateTime created_at;
    private LocalDateTime updated_at;
}
