package com.umutcangider.ecodationinternshipprojecttodolist.configure;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {
    @Bean
    public OpenAPI openApi() {
        return new OpenAPI().info(new Info().title("Todos App").description("To Do List").version("v1.0")
                .contact(new Contact().name("Umutcan").url("https//www.umutcangider.com").email("umtcngdr@gmail.com"))
                .termsOfService("INC BY ")
                .license(new License().name("License").url("#!")));
    }
}
