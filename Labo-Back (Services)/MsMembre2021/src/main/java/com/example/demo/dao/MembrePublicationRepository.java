package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Membre_Publication;

public interface MembrePublicationRepository extends JpaRepository<Membre_Publication, Long> {

}
