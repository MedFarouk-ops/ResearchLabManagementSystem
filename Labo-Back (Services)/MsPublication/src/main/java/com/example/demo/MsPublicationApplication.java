package com.example.demo;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import com.example.demo.entities.Publication;
import com.example.demo.service.IPublicationService;

@SpringBootApplication
@EnableDiscoveryClient
public class MsPublicationApplication implements CommandLineRunner{
	@Autowired
	IPublicationService iPublicationService;
@Autowired

RepositoryRestConfiguration repositoryRestConfig;
	public static void main(String[] args) {
		SpringApplication.run(MsPublicationApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		repositoryRestConfig.exposeIdsFor(Publication.class);
		Publication p1 = new Publication(new Date(), "Articles ", "Spring Rest data", "https://spring.io/projects/spring-data-rest", "https://docs.spring.io/spring-data/rest/docs/2.6.x/reference/pdf/spring-data-rest-reference.pdf");
		iPublicationService.addPublication(p1);
		Publication p2 = new Publication(new Date(), "Articles ", "spring cloud bootstrap", "https://spring.io/projects/spring-data-rest", "https://docs.spring.io/spring-data/rest/docs/2.6.x/reference/pdf/spring-data-rest-reference.pdf");
		iPublicationService.addPublication(p2);
		Publication p3 = new Publication(new Date(), "Articles ", "spring open feign", "https://spring.io/projects/spring-data-rest", "https://docs.spring.io/spring-data/rest/docs/2.6.x/reference/pdf/spring-data-rest-reference.pdf");
		iPublicationService.addPublication(p3);
		
	}

}
