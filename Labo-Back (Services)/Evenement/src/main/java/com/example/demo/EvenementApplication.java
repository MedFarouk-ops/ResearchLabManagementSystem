package com.example.demo;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import com.example.demo.entites.Evenement;

import com.example.demo.service.EvenementImpl;

@SpringBootApplication
public class EvenementApplication  implements CommandLineRunner{
	@Autowired
	EvenementImpl evenementImpl ;
	@Autowired

	RepositoryRestConfiguration repositoryRestConfig;

	public static void main(String[] args) {
		SpringApplication.run(EvenementApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		repositoryRestConfig.exposeIdsFor(Evenement.class);
		Evenement event1 = new Evenement(new Date(),"Alf lila w lila" ,"Pitch yourself");
		evenementImpl.addEvenement(event1);
		Evenement event2 = new Evenement(new Date(),"Enis" ,"Journée Civil");
		evenementImpl.addEvenement(event2);
		Evenement event3 = new Evenement(new Date(),"Enis" ,"Journée Robotique");
		evenementImpl.addEvenement(event3);
		
	}

}
