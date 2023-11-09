package com.example.brewery_backend.Repo;

import com.example.brewery_backend.Model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepo extends JpaRepository<Review,Integer> {
//    List<Review> findAllById(int id);
}
