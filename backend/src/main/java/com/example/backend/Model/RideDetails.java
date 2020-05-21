package com.example.backend.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class RideDetails {
    @Id
    @GeneratedValue
    private int ride_id;
    private String origin;
    private String destination;
    private String date;
    private String time;
    private int seats;
    private String riderName;
}