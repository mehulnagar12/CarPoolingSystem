package com.example.backend.Controllers;

import java.util.List;
import java.util.Optional;

import com.example.backend.Model.Review;
import com.example.backend.Model.Rider;
import com.example.backend.Model.Users;
import com.example.backend.Repo.ReviewRepo;
import com.example.backend.Repo.RiderRepo;
import com.example.backend.Repo.UserRepo;
import com.example.backend.Services.Mail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
public class AdminController {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private RiderRepo riderRepo;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    Mail mail;

    @Autowired
    private ReviewRepo reviewRepo;

    @CrossOrigin("http://localhost:4200/")
    @PostMapping("/admin/addUser")
    public String addUser(@RequestBody Users user) {
        String pwd = user.getPassword();
        String encryptedPwd = passwordEncoder.encode(pwd);
        user.setPassword(encryptedPwd);
        userRepo.save(user);
        return "Successfully Registered..!!";
    }

    @CrossOrigin("http://localhost:4200/")
    @GetMapping("/admin/getAllUsers")
    public List<Users> getAllUsers() {
        return userRepo.findAll();
    }

    @CrossOrigin("http://localhost:4200/")
    @GetMapping("/admin/findUser/{email}")
    public List<Users> findUserByEmail(@PathVariable String email) {
        return userRepo.findByEmail(email);
    }

    @CrossOrigin("http://localhost:4200/")
    @PutMapping("/admin/update/{id}")
    public Optional<Object> updateUser(@PathVariable int id, @RequestBody Users user) {
        return userRepo.findById(id)
        .map(mapper->{
            mapper.setUsername(user.getUsername());
            mapper.setEmail(user.getEmail());
            String pwd = user.getPassword();
            String encryptedPwd = passwordEncoder.encode(pwd);
            mapper.setPassword(encryptedPwd);
            Users updated = userRepo.save(mapper);
            ResponseEntity.ok().body(updated);
            return "User Updated";
        });
    }

    @CrossOrigin("http://localhost:4200/")
    @DeleteMapping("/admin/deleteUser/{id}")    
    public List<Users> deleteUser(@PathVariable int id){
        userRepo.deleteById(id);
        return userRepo.findAll();
    }

    @CrossOrigin("http://localhost:4200/")
    @GetMapping("/admin/displayRider")
    public List<Rider> getAllRider(){
        return riderRepo.findAll();
    }

    @CrossOrigin("http://localhost:4200/")
    @PostMapping("/admin/registerRider")
    public String registerRider(@RequestBody Rider rider){
        String pwd = rider.getRider_password();
        String encryptedPwd = passwordEncoder.encode(pwd);
        rider.setRider_password(encryptedPwd);
        riderRepo.save(rider);       
        return "Rider registered Successfully";
    }

    @CrossOrigin("http://localhost:4200/")
    @DeleteMapping("/admin/deleteRider/{rider_id}")    
    public List<Rider> deleteRider(@PathVariable int rider_id){
        riderRepo.deleteById(rider_id);
        return riderRepo.findAll();
    }

    @GetMapping("/admin/getReviews")
    public List<Review> getAllReviews(){
        return reviewRepo.findAll();
    }

}