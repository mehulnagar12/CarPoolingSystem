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
public class HistoryUser {

    @Id
    @GeneratedValue
    private int id;
    private String username;
    private String riderName;
    private String riderMobile;
    private String riderEmail;
    private String dateTime;
}