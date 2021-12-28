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

import com.example.demo.entities.Outil;
import com.example.demo.services.IOutilService;

@CrossOrigin(origins = "*")
@RestController
public class OutilController {

	@Autowired
	IOutilService outilService;
	
	@GetMapping(value = "/outils")
	public List<Outil> findAllEvenements()
	{
		return outilService.findAll();
	}

	@GetMapping(value = "/outils/{id}")
	public Outil findoneEvenement(@PathVariable Long id)
	{
		return outilService.findOutil(id);
	}
	
	@PostMapping(value = "/outils")
	public Outil addEvenement(@RequestBody Outil event)
	{
		return outilService.addOutil(event);
	}

	
	@PutMapping(value="/outils/{id}")
	public Outil updateEvenement(@PathVariable Long id, @RequestBody Outil e)
	{
		e.setId(id);
		return outilService.updateOutil(e);
	}

	
	@DeleteMapping(value="/outils/{id}")
	public void deleteEvenement(@PathVariable Long id)
	{
		outilService.deleteOutil(id);
	}

}
