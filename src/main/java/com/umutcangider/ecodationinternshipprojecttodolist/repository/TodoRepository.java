package com.umutcangider.ecodationinternshipprojecttodolist.repository;

import com.umutcangider.ecodationinternshipprojecttodolist.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}