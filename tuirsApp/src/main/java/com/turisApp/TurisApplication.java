package com.turisApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TurisApplication {

	public static void main(String[] args) {
	/*SpringApplication app = new SpringApplication(TurisApplication.class);
		app.setDefaultProperties(Collections.singletonMap("server.port","8083"));
		app.run(args);*/

		SpringApplication.run(TurisApplication.class, args);
	}

}
