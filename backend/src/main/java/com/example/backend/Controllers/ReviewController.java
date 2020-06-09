package com.example.backend.Controllers;

import java.util.List;

import com.example.backend.Model.Review;
import com.example.backend.Repo.ReviewRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class ReviewController {

    @Autowired
    ReviewRepo reviewRepo;

    @GetMapping("/admin/showReviews")
    public List<Review> getAllReviews() {
        return reviewRepo.findAll();
    }

    @PostMapping("/addreview")
    public String addRevie(@RequestBody Review review) {
        reviewRepo.save(review);
        return "Review details added successfully";
    }


}