package com.example.demo.service;

import java.util.List;

import com.example.demo.entities.Evenement;


public interface IEvenementService {
	public Evenement addEvenement(Evenement ev);
	public void deleteEvenement(Long id) ;
	public Evenement updateEvenement(Evenement ev) ;
	public Evenement findEvenement(Long id) ;
	public List<Evenement> findAll();
	//Filtrage par propriété
	public Evenement findByTitre(String titre);
	public Evenement findByLieu(String lieu);
}
