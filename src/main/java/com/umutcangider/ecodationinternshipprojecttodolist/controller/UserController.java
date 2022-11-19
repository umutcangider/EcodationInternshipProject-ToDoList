package com.umutcangider.ecodationinternshipprojecttodolist.controller;


import com.umutcangider.ecodationinternshipprojecttodolist.dto.TodoDto;
import com.umutcangider.ecodationinternshipprojecttodolist.dto.UserDto;
import com.umutcangider.ecodationinternshipprojecttodolist.service.TodoService;
import com.umutcangider.ecodationinternshipprojecttodolist.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final UserService userService;
    private final TodoService todoService;

    public UserController(UserService userService, TodoService todoService) {
        this.userService = userService;
        this.todoService = todoService;
    }

    // CREATE USER
    @PostMapping("/user")
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto) {
        return ResponseEntity.ok(userService.createUser(userDto));
    }

    // LIST USER
    @GetMapping("/list/users")
    public ResponseEntity<List<UserDto>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    // ADD TO DO
    @PostMapping("/{id}/addTodo")
    public ResponseEntity<TodoDto> addTodo(@PathVariable(name = "id") Long id, @RequestBody TodoDto todoDto) {
        return ResponseEntity.ok(todoService.addTodo(id, todoDto));

    }

    // FIND USER
    @GetMapping("/find/user/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable(name = "id") Long id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }

    // DELETE USER
    @DeleteMapping("/delete/user/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable(name = "id") Long id) {
        return ResponseEntity.ok(userService.deleteUser(id));
    }

    // LIST TO DO FOR USER
    @GetMapping("/list/{id}/todos")
    public ResponseEntity<List<TodoDto>> getAllTodosForUser(@PathVariable(name = "id") Long id) {
        return ResponseEntity.ok(todoService.getAllTodosForUser(id));
    }

    // UPDATE TO DO FOR USER
    @PutMapping("/{userId}/update/todo/{todoId}")
    public ResponseEntity<TodoDto> updateTodo (@PathVariable(name = "userId") Long userId, @PathVariable(name = "todoId") Long todoId, @RequestBody TodoDto todoDto) {
        return ResponseEntity.ok(todoService.updateTodo(userId, todoId, todoDto));
    }

    // TO DO TOGGLE isCompleted
    @PutMapping("/{userId}/toggle/todo/{todoId}")
    public ResponseEntity<Map<String, Boolean>> toggleTodoCompleted(@PathVariable(name = "userId") Long userId, @PathVariable(name = "todoId") Long todoId) {
        return ResponseEntity.ok(todoService.toggleTodoCompleted(userId, todoId));
    }

    // DELETE TO DO FOR USER
    @DeleteMapping("/delete/user/{userId}/{todoId}")
    public ResponseEntity<Map<String, Boolean>> deleteTodo(@PathVariable(name = "userId") Long userId, @PathVariable(name = "todoId") Long todoId) {
        return ResponseEntity.ok(todoService.deleteTodo(userId,todoId));
    }
}
