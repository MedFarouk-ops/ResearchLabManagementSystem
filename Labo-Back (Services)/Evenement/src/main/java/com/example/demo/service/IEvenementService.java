package com.example.demo.service;

import java.util.List;

import com.example.demo.entites.Evenement;

public interface IEvenementService {
	public Evenement addEvenement(Evenement e);
	public void deleteEvenement(Long id) ;
	public Evenement updateEvenement(Evenement e) ;
	public Evenement findEvenement(Long id) ;
	public List<Evenement> findAll();
	//Filtrage par propriété
	public Evenement findByTitre(String titre);
	public List<Evenement> findByLieu(String lieu);

}
