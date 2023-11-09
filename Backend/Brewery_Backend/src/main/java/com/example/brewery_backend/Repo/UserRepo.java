package com.example.brewery_backend.Repo;

import com.example.brewery_backend.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User,String> {
    User findByEmailAndPassword(String email, String password);
}
