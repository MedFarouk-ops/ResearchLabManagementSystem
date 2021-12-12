package com.example.demo.dao;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;

import com.example.demo.entities.Publication;
@RepositoryRestController
public interface PublicationRepository extends JpaRepository<Publication, Long> {
	List<Publication> findByType(String type);
	Publication findByTitre(String titre);
	Publication findByLien(String lien);

}
