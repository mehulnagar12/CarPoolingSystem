package com.example.backend.Repo;

import com.example.backend.Model.Review;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepo extends JpaRepository<Review,Integer>{

}