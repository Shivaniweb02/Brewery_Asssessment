package com.example.brewery_backend.Service;

import com.example.brewery_backend.Model.Review;
import com.example.brewery_backend.Repo.ReviewRepo;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepo reviewRepo;


    public void addReview(Review review)
    {
        this.reviewRepo.save(review);
    }
    public List<Review> getAllReview(){
       return this.reviewRepo.findAll();
    }
    @PersistenceContext
    private EntityManager entityManager;
    public List<Review> getReviewsById(String id) {
        TypedQuery<Review> query = entityManager.createQuery(
                "SELECT r FROM Review r WHERE r.id = :id", Review.class);
        query.setParameter("id", id);
        return query.getResultList();
    }
}
