package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

import com.example.demo.dao.PublicationRepository;
import com.example.demo.entities.Publication;

@SpringBootApplication
@EnableDiscoveryClient
public class MsPublicationApplication implements CommandLineRunner{
@Autowired
	PublicationRepository publicationRepository;
@Autowired

RepositoryRestConfiguration repositoryRestConfig;
	public static void main(String[] args) {
		SpringApplication.run(MsPublicationApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		repositoryRestConfig.exposeIdsFor(Publication.class);
		Publication pub1= new Publication("service oriented architecture", null,"book");
		publicationRepository.save(pub1);
		Publication pub2= new Publication("bitcoin", null,"white paper");
		publicationRepository.save(pub2);
		
	}

}
