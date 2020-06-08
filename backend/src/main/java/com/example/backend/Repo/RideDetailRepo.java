package com.example.backend.Repo;

import java.util.List;

import com.example.backend.Model.RideDetails;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RideDetailRepo extends JpaRepository<RideDetails,Integer>{

	
	@Query(value = "SELECT ride_id,origin,destination,date,time,seats,rider_name from ride_details order 	by ride_id DESC",nativeQuery = true)
	List<RideDetails> findAllDesc();

	List<RideDetails> findByOrigin(String origin);

	List<RideDetails> findByDestination(String destination);


}