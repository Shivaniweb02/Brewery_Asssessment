package com.example.brewery_backend.Controller;

import com.example.brewery_backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("*")
public class User {
  @Autowired
  private UserService userService;
    @GetMapping("getUser/{email}")
    public Optional<com.example.brewery_backend.Model.User> getUserById(@PathVariable("email") String email){
        return this.userService.getUserByID(email);
    }

    @PostMapping("/register")
    public com.example.brewery_backend.Model.User addUser(@RequestBody com.example.brewery_backend.Model.User user)
    {
        return this.userService.saveUser(user);
    }

    @PostMapping("/login")
    public com.example.brewery_backend.Model.User isRegistered(@RequestBody com.example.brewery_backend.Model.User user)
    {
      return this.userService.login(user.getEmail(),user.getPassword());
    }



}
