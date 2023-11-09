package com.example.brewery_backend.Controller;

import com.example.brewery_backend.Service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class Review {
    @Autowired
    private ReviewService reviewService;

    @PostMapping("/postReview")
    public void addReview(@RequestBody com.example.brewery_backend.Model.Review review)
    {
        this.reviewService.addReview(review);
    }

    @GetMapping("/getAllReview")
    public List<com.example.brewery_backend.Model.Review> getAllReview()
    {
    return this.reviewService.getAllReview();
    }

    @GetMapping("/getEmailByID/{id}")
    public List<com.example.brewery_backend.Model.Review> getReviewByID(@PathVariable("id") String id){
        return this.reviewService.getReviewsById(id);
    }
}
