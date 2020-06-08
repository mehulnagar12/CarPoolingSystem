package com.example.backend.Model;

import javax.persistence.Column;

//import java.util.Set;

//import javax.persistence.CascadeType;
import javax.persistence.Entity;
//import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Users {

    @Id
    @GeneratedValue
    private int user_id;
    private String name;
    private String username;
    @Column(unique = true)
    private String email;
    private String mobile;
    private String password;
    

//    private Set<Role> roles;
}