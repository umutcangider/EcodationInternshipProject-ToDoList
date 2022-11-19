package com.umutcangider.ecodationinternshipprojecttodolist.service;


import com.umutcangider.ecodationinternshipprojecttodolist.bean.ModelMapperBean;
import com.umutcangider.ecodationinternshipprojecttodolist.dto.TodoDto;
import com.umutcangider.ecodationinternshipprojecttodolist.exception.TodoNotFoundException;
import com.umutcangider.ecodationinternshipprojecttodolist.exception.UserNotFoundException;
import com.umutcangider.ecodationinternshipprojecttodolist.model.Todo;
import com.umutcangider.ecodationinternshipprojecttodolist.model.User;
import com.umutcangider.ecodationinternshipprojecttodolist.repository.TodoRepository;
import com.umutcangider.ecodationinternshipprojecttodolist.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class TodoService {

    private final TodoRepository todoRepository;
    private final UserRepository userRepository;
    private final ModelMapperBean modelMapperBean;

    public TodoService(TodoRepository todoRepository, UserRepository userRepository, ModelMapperBean modelMapperBean) {
        this.todoRepository = todoRepository;
        this.userRepository = userRepository;
        this.modelMapperBean = modelMapperBean;
    }

    // Model Mapper (DTO)
    public TodoDto entityToDto(Todo todo) {
        TodoDto todoDto = modelMapperBean.modelMapper().map(todo, TodoDto.class);
        return todoDto;
    }

    // Model Mapper (Entity)
    public Todo dtoToEntity(TodoDto todoDto) {
        Todo todo = modelMapperBean.modelMapper().map(todoDto, Todo.class);
        return todo;
    }

    // CREATE
    public TodoDto addTodo(Long id, TodoDto todoDto) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User could not found by id" + id));
        if(todoDto != null) {
            Todo todo = dtoToEntity(todoDto);
            user.getTodoList().add(todo);
            userRepository.save(user);
        }
        return todoDto;
    }

    // LIST
    public List<TodoDto> getAllTodosForUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User could not found by id" + id));
        Iterable<Todo> entityList = user.getTodoList();
        List<TodoDto> dtoList = new ArrayList<>();
        for(Todo temp : entityList) {
            TodoDto todoDto = entityToDto(temp);
            dtoList.add(todoDto);
        }
        return dtoList;
    }

    // UPDATE
    public TodoDto updateTodo(Long userId, Long todoId, TodoDto todoDto) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User could not found by id" + userId));
        Todo todo = todoRepository.findById(todoId)
                .orElseThrow(() -> new TodoNotFoundException("Todo could not found by id" + todoId));
        if(user != null && todo != null) {
            todo.setTitle(todoDto.getTitle());
            todo.setDescription(todoDto.getDescription());
            todo.setIsCompleted(todoDto.getIsCompleted());
            todoRepository.save(todo);
        }
        return todoDto;
    }

    // isCompleted UPDATE
    public Map<String, Boolean> toggleTodoCompleted(Long userId, Long todoId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User could not found by id" + userId));
        Todo todo = todoRepository.findById(todoId)
                .orElseThrow(() -> new TodoNotFoundException("Todo could not found by id" + todoId));
        todo.setIsCompleted(!todo.getIsCompleted());
        todoRepository.save(todo);

        Map<String, Boolean> response = new HashMap<>();
        response.put("Todo Completed Update", Boolean.TRUE);
        return response;
    }

    // DELETE
    public Map<String, Boolean> deleteTodo(Long userId, Long todoId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User could not found by id" + userId));
        Todo todo = todoRepository.findById(todoId)
                .orElseThrow(() -> new TodoNotFoundException("Todo could not found by id" + todoId));
        user.getTodoList().remove(todo);
        todoRepository.delete(todo);
        userRepository.save(user);

        Map<String, Boolean> response = new HashMap<>();
        response.put("Todo Deleted", Boolean.TRUE);
        return response;
    }
}