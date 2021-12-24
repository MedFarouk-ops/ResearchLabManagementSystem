package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.dao.EvenementRepository;
import com.example.demo.entities.Evenement;

@Service
public class EvenementImpl implements IEvenementService {

	@Autowired
	EvenementRepository evenementRepository ;

	@Override
	public Evenement addEvenement(Evenement ev) {
		return evenementRepository.save(ev);
	}

	@Override
	public void deleteEvenement(Long id) {
		if(evenementRepository.findById(id).isPresent())
			evenementRepository.deleteById(id);
		else {
			System.err.println("ID NotFound");
		}
	}

	@Override
	public Evenement updateEvenement(Evenement ev) {
		return evenementRepository.saveAndFlush(ev);
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
		return evenementRepository.findByTitre(titre).get(0);
	}

	@Override
	public Evenement findByLieu(String lieu) {
		return evenementRepository.findByLieu(lieu).get(0);
	}
	

}
