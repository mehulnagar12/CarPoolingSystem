package com.example.backend.Services;

import com.example.backend.Model.Rider;
import com.example.backend.Repo.RiderRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomRiderDetailsService implements UserDetailsService {

    @Autowired
    private RiderRepo riderRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Rider rider = riderRepo.findByUsername(username);
        CustomRiderDetails riderDetails = null;

        if(rider!=null){
            riderDetails = new CustomRiderDetails();
            riderDetails.setRider(rider);
        }
        else{
            return (UserDetails) new UsernameNotFoundException("No Such User Exists");
        }
        return riderDetails;
    }

}