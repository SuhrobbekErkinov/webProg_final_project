package org.example.backend;

import org.example.backend.service.UserService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
        var context = SpringApplication.run(BackendApplication.class, args);
        var service = context.getBean(UserService.class);
//        var user = User.builder()
//                .firstname("said")
//                .lastname("xam")
//                .password("saidmurod")
//                .email("saidmurod@newuu.uz")
//                .build();
//        repository.save(user);

    }

}
