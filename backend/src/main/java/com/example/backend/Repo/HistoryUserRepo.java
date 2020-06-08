package com.example.backend.Repo;

import java.util.List;

import com.example.backend.Model.HistoryUser;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface HistoryUserRepo extends JpaRepository<HistoryUser,Integer>{

	List<HistoryUser> deleteByUsername(String username);
    @Query(value = "SELECT id,date_time,rider_email,rider_mobile,rider_name,username from history_user order by id DESC",nativeQuery = true)
	List<HistoryUser> findAllDesc();
}