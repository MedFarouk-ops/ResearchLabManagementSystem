package com.example.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;

import com.example.entities.Outil;

@RepositoryRestController
public interface OutilRepository extends JpaRepository<Outil, Long>{
	Outil findBySource(String source);
}
