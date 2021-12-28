package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Evenement;
import com.example.demo.service.IEvenementService;
@CrossOrigin(origins = "*")
@RestController
public class EventController {
	@Autowired
	IEvenementService iEvenementService;
	
	@GetMapping(value = "/evenements")
	public List<Evenement> findAllEvenements()
	{
		return iEvenementService.findAll();
	}

	@GetMapping(value = "/evenements/{id}")
	public Evenement findoneEvenement(@PathVariable Long id)
	{
		return iEvenementService.findEvenement(id);
	}
	
	@PostMapping(value = "/evenements")
	public Evenement addEvenement(@RequestBody Evenement event)
	{
		return iEvenementService.addEvenement(event);
	}

	
	@PutMapping(value="/evenements/{id}")
	public Evenement updateEvenement(@PathVariable Long id, @RequestBody Evenement e)
	{
		e.setId(id);
		return iEvenementService.updateEvenement(e);
	}

	
	@DeleteMapping(value="/evenements/{id}")
	public void deleteEvenement(@PathVariable Long id)
	{
		iEvenementService.deleteEvenement(id);
	}

}
