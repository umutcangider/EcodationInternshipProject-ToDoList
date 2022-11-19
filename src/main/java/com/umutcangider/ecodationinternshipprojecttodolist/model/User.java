package com.umutcangider.ecodationinternshipprojecttodolist.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

@Entity
@Table(name = "users")
public class User extends BaseEntity implements Serializable {

    private String username;
    private String email;
    private String password;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Todo> todoList;

}