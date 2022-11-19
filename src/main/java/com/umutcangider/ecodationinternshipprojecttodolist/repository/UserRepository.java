package com.umutcangider.ecodationinternshipprojecttodolist.repository;

import com.umutcangider.ecodationinternshipprojecttodolist.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findUserByUsernameAndPassword(String username, String password);
}
