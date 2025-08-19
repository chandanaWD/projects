package com.sic.SIC.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "login",schema = "public")
public class LoginEntity {
    @Id
    private Long id;

    private String userName;

    private String password;

    private String phoneNo;

    private LocalDateTime createdAt;

    private LocalDateTime updtaedAt;

}



