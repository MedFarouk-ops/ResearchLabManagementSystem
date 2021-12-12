package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;

import com.example.demo.entities.Outils;

@RepositoryRestController
public interface OutilsRepository extends JpaRepository<Outils, Long> {

}
