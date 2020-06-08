package com.example.backend.Repo;

import java.util.List;

import com.example.backend.Model.HistoryRider;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface HistoryRiderRepo extends JpaRepository<HistoryRider,Integer>{

    @Query(value = "SELECT id,user_email,user_mobile,username,rider_name from history_rider order by id DESC",nativeQuery = true)
	List<HistoryRider> findAllDesc();
    
}