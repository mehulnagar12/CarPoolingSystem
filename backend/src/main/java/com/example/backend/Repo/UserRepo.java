package com.example.backend.Repo;

import java.util.List;

import com.example.backend.Model.Users;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<Users,Integer>{

	Users findByUsername(String username);

	List<Users> findByEmail(String email);

}