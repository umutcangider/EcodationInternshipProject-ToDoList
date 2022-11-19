package com.umutcangider.ecodationinternshipprojecttodolist.service;


import com.umutcangider.ecodationinternshipprojecttodolist.bean.ModelMapperBean;
import com.umutcangider.ecodationinternshipprojecttodolist.dto.UserDto;
import com.umutcangider.ecodationinternshipprojecttodolist.exception.UserNotFoundException;
import com.umutcangider.ecodationinternshipprojecttodolist.model.User;
import com.umutcangider.ecodationinternshipprojecttodolist.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final ModelMapperBean modelMapperBean;

    public UserService(UserRepository userRepository, ModelMapperBean modelMapperBean) {
        this.userRepository = userRepository;
        this.modelMapperBean = modelMapperBean;
    }


    // Model Mapper (DTO)
    public UserDto entityToDto(User user) {
        UserDto userDto = modelMapperBean.modelMapper().map(user, UserDto.class);
        return userDto;
    }

    // Model Mapper (Entity)
    public User dtoToEntity(UserDto userDto) {
        User user = modelMapperBean.modelMapper().map(userDto, User.class);
        return user;
    }

    // CREATE
    public UserDto createUser(UserDto userDto) {
        if(userDto != null) {
            User user = dtoToEntity(userDto);
            userRepository.save(user);
        }
        return userDto;
    }

    // LIST
    public List<UserDto> getAllUsers(){
        Iterable<User> entityList = userRepository.findAll();
        List<UserDto> dtoList = new ArrayList<>();
        for(User temp : entityList) {
            UserDto userDto = entityToDto(temp);
            dtoList.add(userDto);
        }
        return dtoList;
    }

    // FIND
    public UserDto getUserById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User could not found by id" + id));
        UserDto userDto = entityToDto(user);
        return userDto;
    }


    // DELETE
    public Map<String, Boolean> deleteUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User could not found by id" + id));
        userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}