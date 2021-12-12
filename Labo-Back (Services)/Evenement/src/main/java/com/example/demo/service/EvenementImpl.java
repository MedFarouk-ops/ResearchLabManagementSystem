package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.EvenementRepository;
import com.example.demo.entites.Evenement;

@Service
public class EvenementImpl implements IEvenementService{
	@Autowired
	EvenementRepository evenementRepository ;
	@Override
	public Evenement addEvenement(Evenement e) {
		evenementRepository.save(e);
		return e;
	}

	@Override
	public void deleteEvenement(Long id) {
		if(evenementRepository.findById(id).isPresent())
			evenementRepository.deleteById(id);
		else
			System.err.println("ID NotFound");
		
	}

	@Override
	public Evenement updateEvenement(Evenement e) {
		
		return evenementRepository.saveAndFlush(e);
	}

	@Override
	public Evenement findEvenement(Long id) {
		
		return evenementRepository.findById(id).get();
	}

	@Override
	public List<Evenement> findAll() {
		
		return evenementRepository.findAll();
	}

	@Override
	public Evenement findByTitre(String titre) {
		
		return evenementRepository.findByTitre(titre);
	}

	@Override
	public List<Evenement> findByLieu(String lieu) {
		
		return evenementRepository.findByLieu(lieu);
	}

}
