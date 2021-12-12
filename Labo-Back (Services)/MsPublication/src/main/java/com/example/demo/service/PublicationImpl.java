package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.PublicationRepository;
import com.example.demo.entities.Publication;
@Service
public class PublicationImpl implements IPublicationService{
	@Autowired
	PublicationRepository publicationReository ;

	@Override
	public Publication addPublication(Publication p) {
		publicationReository.save(p);
		return p;
	}

	@Override
	public void deletePublication(Long id) {
		if(publicationReository.findById(id).isPresent())
		publicationReository.deleteById(id);
		else {
			System.err.println("ID NotFound");
		}
		
	}

	@Override
	public Publication updatePublication(Publication p) {
		
		return publicationReository.saveAndFlush(p);
	}

	@Override
	public Publication findPublication(Long id) {
		
		return publicationReository.findById(id).get();
	}

	@Override
	public List<Publication> findAll() {
		
		return publicationReository.findAll();
	}

	@Override
	public Publication findByLien(String lien) {
		
		return publicationReository.findByLien(lien);
	}

	@Override
	public Publication findByTitre(String titre) {
		
		return publicationReository.findByTitre(titre);
	}

	@Override
	public List<Publication> findByType(String type) {
		
		return publicationReository.findByType(type);
	}

}
