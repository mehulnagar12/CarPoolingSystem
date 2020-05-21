package com.example.backend.Repo;

import java.util.List;

import com.example.backend.Model.RideDetails;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RideDetailRepo extends JpaRepository<RideDetails,Integer>{

	List<RideDetails> findByOrigin(String origin);

	List<RideDetails> findByDestination(String destination);

}