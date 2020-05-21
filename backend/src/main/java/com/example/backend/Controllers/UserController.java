package com.example.backend.Controllers;

import java.util.List;
import java.util.Optional;

import com.example.backend.Model.Email;
import com.example.backend.Model.HistoryRider;
import com.example.backend.Model.HistoryUser;
import com.example.backend.Model.RideDetails;
import com.example.backend.Model.Rider;
import com.example.backend.Model.Users;
import com.example.backend.Repo.HistoryRiderRepo;
import com.example.backend.Repo.HistoryUserRepo;
import com.example.backend.Repo.RideDetailRepo;
import com.example.backend.Repo.RiderRepo;
import com.example.backend.Repo.UserRepo;
import com.example.backend.Services.Mail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private RiderRepo riderRepo;

    @Autowired
    private RideDetailRepo rideDetailRepo;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    Mail mail;

    @Autowired
    private HistoryUserRepo historyUserRepo;

    @Autowired
    private HistoryRiderRepo historyRiderRepo;

    @GetMapping("/")
    public String home(){
        return "HOME";
    }

    @GetMapping("/users/list")
    public List<Users> getUsers() {
        return userRepo.findAll();
    }

    @GetMapping("/users/list/{username}")
    public Users getUsersByUsername(@PathVariable String username) {
        return userRepo.findByUsername(username);
    }
    
    @CrossOrigin("http://localhost:4200/")
    @PostMapping("/signup")
    public String addUser(@RequestBody Users user){
        String pwd = user.getPassword();
        String encryptedPwd = passwordEncoder.encode(pwd);
        user.setPassword(encryptedPwd);
        userRepo.save(user);
        return "Successfully Registered..!!";
    }

    @PostMapping("/addRider")
    public String addUser(@RequestBody Rider rider) {
        String pwd = rider.getRider_password();
        String encryptedPwd = passwordEncoder.encode(pwd);
        rider.setRider_password(encryptedPwd);
        riderRepo.save(rider);
        return "Successfully Registered..!!";
    }

    @CrossOrigin("http://localhost:4200/")
    @GetMapping("/users/getRideDetails")
    public List<RideDetails> getRideDetails() {
        return rideDetailRepo.findAll();
    }

    @CrossOrigin("http://localhost:4200/")
    @GetMapping("/users/getRiderDetails")
    public List<Rider> getRiderDetails() {
        return riderRepo.findAll();
    }

    @CrossOrigin("http://localhost:4200/")
    @PutMapping("/users/update/{username}")
    public String updateInfo(@PathVariable String username){
        Users user = userRepo.findByUsername(username);
        System.out.println(user.getName());
        user.setName(user.getName());
        user.setEmail(user.getEmail());
        
        userRepo.save(user);
        return "Updated..!!";
    }

    @CrossOrigin("http://localhost:4200/")
    @GetMapping("/getRideDetails")
    public List<RideDetails> getRiderDetailsNoAuth() {
        return rideDetailRepo.findAll();
    }

    @CrossOrigin("http://localhost:4200/")
    @GetMapping("/users/getRider/{rider_id}")
    public Optional<Rider> getRiderById(@PathVariable int rider_id) {
        return riderRepo.findById(rider_id);
    }

    @CrossOrigin("http://localhost:4200/")
    @PostMapping("/users/sendEmail")
    public String MailSender(@RequestBody Email email) throws Exception {
        mail.sendEmail(email);
        Thread.sleep(6*10000);
        mail.sendEmailRider(email);
        return "Email Sent..!!";
    }

    @CrossOrigin("http://localhost:4200/")
    @PostMapping("/users/sendCancelEmail")
    public String cancelEmail(@RequestBody Email email) throws Exception {
        mail.sendCancelEmail(email);
        return "Ride Successfully Cancelled..!!";
    }
    
    @CrossOrigin("http://localhost:4200/")
    @PostMapping("/users/sendEmailRider")
    public String riderEmail(@RequestBody Email email) throws Exception {
        mail.sendEmailRider(email);
        return "Ride Successfully Booked..!!";
    }
    

    @CrossOrigin("http://localhost:4200/")
    @GetMapping("/users/getRideDetailsO/{origin}")
    public List<RideDetails> getRidesByOrigin(@PathVariable String origin) {
        return rideDetailRepo.findByOrigin(origin);
    }

    @CrossOrigin("http://localhost:4200/")
    @GetMapping("/users/getRideDetailsD/{destination}")
    public List<RideDetails> getRidesByDestination(@PathVariable String destination) {
        return rideDetailRepo.findByDestination(destination);
    }

    @CrossOrigin("http://localhost:4200/")
    @PostMapping("/users/history")
    public String postHistory(@RequestBody HistoryUser historyUser){
        historyUserRepo.save(historyUser);
        return "History Saved";
    }

    @CrossOrigin("http://localhost:4200/")
    @PostMapping("/users/RiderHistory")
    public String postRiderHistory(@RequestBody HistoryRider historyRider){
        historyRiderRepo.save(historyRider);
        return "History Saved";
    }
    

    @CrossOrigin("http://localhost:4200/")
    @GetMapping("/users/getHistory")
    public List<HistoryUser> getHistory(){
        return historyUserRepo.findAll();
    }
}