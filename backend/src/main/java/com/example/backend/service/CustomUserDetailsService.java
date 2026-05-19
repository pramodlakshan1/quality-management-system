package com.example.backend.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.backend.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService  implements UserDetailsService{

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUserName(String username) throws UsernameNotFoundException{
        return userRepository.findByUserName(username).orElseThrow(()-> new UsernameNotFoundException("User not found"));
    }
}
