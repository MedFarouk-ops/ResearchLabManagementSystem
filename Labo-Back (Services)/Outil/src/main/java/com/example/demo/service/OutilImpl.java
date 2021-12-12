package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.OutilRepository;
import com.example.demo.entites.Outil;
@Service
public class OutilImpl implements IOutilService{
	@Autowired
	OutilRepository outilRepository;
	@Override
	public Outil addOutil(Outil o) {
		outilRepository.save(o);
		return o;
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
		return outilRepository.saveAndFlush(o);
	}

	@Override
	public Outil findOutil(Long id) {
		
		return outilRepository.findById(id).get();
	}

	@Override
	public List<Outil> findAll() {
		
		return outilRepository.findAll();
	}

}
