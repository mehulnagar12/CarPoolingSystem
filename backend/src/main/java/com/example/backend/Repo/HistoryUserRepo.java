package com.example.backend.Repo;

import java.util.List;

import com.example.backend.Model.HistoryUser;

import org.springframework.data.jpa.repository.JpaRepository;

public interface HistoryUserRepo extends JpaRepository<HistoryUser,Integer>{

	List<HistoryUser> deleteByUsername(String username);
    
}