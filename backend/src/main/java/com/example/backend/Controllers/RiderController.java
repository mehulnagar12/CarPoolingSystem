package com.example.backend.Controllers;

import java.util.List;
import java.util.Optional;

import com.example.backend.Model.Email;
import com.example.backend.Model.HistoryRider;
import com.example.backend.Model.RideDetails;
import com.example.backend.Model.Rider;
import com.example.backend.Repo.HistoryRiderRepo;
import com.example.backend.Repo.RideDetailRepo;
import com.example.backend.Repo.RiderRepo;
import com.example.backend.Services.Mail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RiderController {

    @Autowired
    private RiderRepo riderRepo;

    @Autowired
    private RideDetailRepo rideDetailRepo;

    @Autowired
    private HistoryRiderRepo historyRiderRepo;
    
    @Autowired
    Mail mail;

    @Autowired
    Optional<Rider> ride;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @CrossOrigin("http://localhost:4200/")
    @GetMapping("/riders/getRider")
    public List<Rider> getAllRider() {
        return riderRepo.findAll();
    }

    @CrossOrigin("http://localhost:4200/")
    @GetMapping("/riders/getRider/{username}")
    public Rider getRider(@PathVariable String username) {
        return riderRepo.findByUsername(username);
    }

    @CrossOrigin("http://localhost:4200/")
    @PostMapping("/riders/addRideDetails")
    public String addRide(@RequestBody RideDetails rideDetail) {
        rideDetailRepo.save(rideDetail);
        return "Ride Details added succesfully";
    }

    @CrossOrigin("http://localhost:4200/")
    @GetMapping("/riders/getRiderHistory")
    public List<HistoryRider> getRiderHistory(){
        return historyRiderRepo.findAllDesc();
    }

    @CrossOrigin("http://localhost:4200/")
    @PostMapping("/riders/sendCancelEmail")
    public String cancelEmail(@RequestBody Email email) throws Exception {
        mail.sendCancelEmail(email);
        return "Ride Successfully Cancelled..!!";
    }

    @CrossOrigin("http://localhost:4200/")
    @DeleteMapping("/riders/deleteHistoryRider/{rider_id}")
    public String deleteHistoryUser(@PathVariable int rider_id){
        historyRiderRepo.deleteById(rider_id);
        return "Deleted";
    }

    @CrossOrigin("http://localhost:4200/")
    @PutMapping("/riders/update/{id}")
    public String updateInfo(@PathVariable int id,@RequestBody Rider riderDet){
        ride = riderRepo.findById(id);
        Rider rider = ride.get();
        System.out.println("Name:--->"+rider.getUsername());
        rider.setUsername(riderDet.getUsername());
        String pwd = riderDet.getRider_password();
        String encryptedPwd = passwordEncoder.encode(pwd);
        rider.setRider_password(encryptedPwd);
        rider.setCity(riderDet.getCity());
        rider.setCarmodel(riderDet.getCarmodel());
        rider.setCarnumber(riderDet.getCarnumber());
        rider.setCarcolor(riderDet.getCarcolor());

        riderRepo.save(rider);
        System.out.println(rider.getUsername());
        return "Updated..!!";
    }
}