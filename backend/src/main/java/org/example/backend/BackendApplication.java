package org.example.backend;

import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
//        SpringApplication.run(BackendApplication.class, args);
        var user = new User();
        user.setFirstname("saidmurod");
        user.setLastname("xamidov");
        user.setEmail("sadifasdf");
        user.setPassword("234234");
        System.out.println(user.toString());
    }

}
