package com.example.demo.controllers;

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

import com.example.demo.entities.Publication;
import com.example.demo.service.IPublicationService;

@CrossOrigin(origins = "*")
@RestController
public class PublicationController {

	@Autowired
	IPublicationService publicationService;
	
	@GetMapping(value = "/publications")
	public List<Publication> findAllEvenements()
	{
		return publicationService.findAll();
	}

	@GetMapping(value = "/publications/{id}")
	public Publication findPublicationById(@PathVariable Long id)
	{
		return publicationService.findPublication(id);
	}
	
	@PostMapping(value = "/publications")
	public Publication addPublication(@RequestBody Publication pub)
	{
		return publicationService.addPublication(pub);
	}

	
	@PutMapping(value="/publications/{id}")
	public Publication updatePublication(@PathVariable Long id, @RequestBody Publication p)
	{
		p.setId(id);
		return publicationService.updatePublication(p);
	}

	
	@DeleteMapping(value="/publications/{id}")
	public void deletePublication(@PathVariable Long id)
	{
		publicationService.deletePublication(id);
	}

}
