package com.example.brewery_backend.Service;

import com.example.brewery_backend.Model.User;
import com.example.brewery_backend.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    public Optional<User> getUserByID(String email)
    {
        return this.userRepo.findById(email);
    }

    public User saveUser(User user)
    {
        return  this.userRepo.save(user);
    }

    public User login(String email, String password) {
        User user = userRepo.findByEmailAndPassword(email, password);
        return user ;
    }
}
