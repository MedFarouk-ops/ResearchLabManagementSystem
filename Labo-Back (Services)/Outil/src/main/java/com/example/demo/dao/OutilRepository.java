package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;

import com.example.demo.entites.Outil;

@RepositoryRestController
public interface OutilRepository extends JpaRepository<Outil, Long> {
	

}
