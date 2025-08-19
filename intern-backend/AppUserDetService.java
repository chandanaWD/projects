package com.sic.SIC.config;

import com.sic.SIC.entity.LoginEntity;
import com.sic.SIC.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class AppUserDetService implements UserDetailsService {

    @Autowired
    private LoginRepository loginRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        final LoginEntity loginUser = loginRepository.findByUserName(username).orElseThrow(() -> {
            throw new RuntimeException("User not found");
        });

        AppUser user = new AppUser();
        user.setUsername(loginUser.getUserName());
        user.setPassword(new BCryptPasswordEncoder().encode(loginUser.getPassword()));
        user.setPhone(loginUser.getPhoneNo());
        return user;
    }
}
