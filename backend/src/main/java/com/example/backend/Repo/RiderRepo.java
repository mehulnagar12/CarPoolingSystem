package com.example.backend.Repo;

import com.example.backend.Model.Rider;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RiderRepo extends JpaRepository<Rider,Integer>{

	Rider findByUsername(String username);



}