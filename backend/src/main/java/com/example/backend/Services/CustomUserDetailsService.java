package com.example.backend.Services;

import com.example.backend.Model.Users;
import com.example.backend.Repo.UserRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepo UserRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = UserRepo.findByUsername(username);
        CustomUserDetails userDetails=null;
        if(user != null){
            userDetails = new CustomUserDetails();
            userDetails.setUser(user);
        }
        else{
            return (UserDetails) new UsernameNotFoundException("No Such User Exists");
        }
        return userDetails;
    }

}