package com.umutcangider.ecodationinternshipprojecttodolist.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TodoDto {

    private Long id;
    private String title;
    private String description;
    private Boolean isCompleted = Boolean.FALSE;
}