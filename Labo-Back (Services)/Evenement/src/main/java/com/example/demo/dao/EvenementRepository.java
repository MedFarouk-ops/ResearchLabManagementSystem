package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;

import com.example.demo.entites.Evenement;
@RepositoryRestController
public interface EvenementRepository extends JpaRepository<Evenement, Long> {
	List<Evenement> findByLieu(String lieu);
	Evenement findByTitre(String titre);

}
