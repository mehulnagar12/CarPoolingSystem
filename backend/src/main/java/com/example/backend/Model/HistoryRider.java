package com.example.backend.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HistoryRider {
    
    @Id
    @GeneratedValue
    private int id;
    private String username;
    private String userMobile;
    private String userEmail;
    private String riderName;
}