package com.umutcangider.ecodationinternshipprojecttodolist.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

@Entity
@Table(name = "todo")
public class Todo extends BaseEntity implements Serializable  {

    private String title;
    private String description;
    private Boolean isCompleted = Boolean.FALSE;

}