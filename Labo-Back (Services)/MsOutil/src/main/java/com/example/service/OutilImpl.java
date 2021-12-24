package com.example.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.dao.OutilRepository;
import com.example.entities.Outil;

@Service
public class OutilImpl implements IOutilService{

	@Autowired
	OutilRepository outilRepository ;
	
	@Override
	public Outil addOutil(Outil o) {
		return outilRepository.save(o);
	}

	@Override
	public void deleteOutil(Long id) {
		if(outilRepository.findById(id).isPresent())
			outilRepository.deleteById(id);
		else {
			System.err.println("ID NotFound");
		}
	}

	@Override
	public Outil updateOutil(Outil o) {
		outilRepository.save(o);
		return o;
	}

	@Override
	public Outil findOutil(Long id) {
		return outilRepository.findById(id).get();
	}

	@Override
	public List<Outil> findAll() {
		return outilRepository.findAll();
	}

	@Override
	public Outil findBySource(String source) {
		return  outilRepository.findBySource(source);
	}

}
