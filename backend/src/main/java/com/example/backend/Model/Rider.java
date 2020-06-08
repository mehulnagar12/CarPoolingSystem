package com.example.backend.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Rider {
    @Id
    @GeneratedValue
    private int rider_id;
    private String name;
    private String username;
    @Column(unique = true)
    private String email;
    private String rider_mobile;
    private String city;
    private String carmodel;
    @Column(unique = true)
    private String carnumber;
    private String carcolor;
    private String rider_password;
    
}