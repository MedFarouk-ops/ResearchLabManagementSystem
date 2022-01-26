package com.example.demo.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.beans.EtudiantBean;
import com.example.demo.beans.Publication;
import com.example.demo.beans.PublicationBean;
import com.example.demo.dao.Membrepubrepository;
import com.example.demo.entities.EnseignantChercheur;
import com.example.demo.entities.Etudiant;
import com.example.demo.entities.Member;
import com.example.demo.proxies.PublicationProxyService;
import com.example.demo.service.IMemberService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/membres")
public class MembreController {
	@Autowired
	IMemberService iMemberService;
	@Autowired
	PublicationProxyService pubProx ;
	
	@GetMapping(value = "")
	public List<Member> findAllmembres() {
		return iMemberService.findAll();
	}

	@GetMapping(value = "/{id}")
	public Member findoneMembre(@PathVariable Long id) {
		return iMemberService.findMember(id);
	}

	@PostMapping(value = "/etudiant")
	public Member addMembre(@RequestBody EtudiantBean etd) {
		Etudiant etd1 = new Etudiant(etd.getCin() , etd.getNom() , etd.getPrenom() ,etd.getDateNaissance() ,etd.getCv() ,etd.getPhoto() ,etd.getEmail() , etd.getPassword());
		iMemberService.addMember(etd1);
		iMemberService.affecterencadrantToetudiant(etd1.getId(), etd.getEnsId());
		return iMemberService.updateMember(etd1);
	}
	
	

	
	

	@PostMapping(value = "/enseignant")
	public Member addMembre(@RequestBody EnseignantChercheur ens) {
		return iMemberService.addMember(ens);
	}

	
	@GetMapping(value = "/enseignant")
	public List<EnseignantChercheur> getAllEns() {
		return iMemberService.getAllEns();
	}
	
	@PutMapping(value = "/etudiant/{id}")
	public Member updatemembre(@PathVariable Long id, @RequestBody Etudiant p) {
		p.setId(id);
		return iMemberService.updateMember(p);
	}

	@PutMapping(value = "/enseignant/{id}")
	public Member updateMembre(@PathVariable Long id, @RequestBody EnseignantChercheur p) {
		p.setId(id);
		return iMemberService.updateMember(p);
	}

	
	@PutMapping(value = "/membre/{idMembre}/publication/{idPub}")
	public void affecterMembrePub(@PathVariable(value = "idPub") Long idPub, @PathVariable(value ="idMembre") Long idMembre) {
		
		iMemberService.affecterauteurTopublication( idMembre, idPub);
	}

	
	
	@PutMapping(value = "/membre/{idMembre}/outil/{idOutil}")
	public void affecterMembreOutil(@PathVariable(value = "idOutil") Long idOutil, @PathVariable(value ="idMembre") Long idMembre) {
		
		iMemberService.affecterauteurToOutils( idMembre, idOutil);
	}

	
	
	@PutMapping(value = "/etudiant")
	public Member affecter(@RequestParam Long idetd, @RequestParam Long idens) {

		return iMemberService.affecterencadrantToetudiant(idetd, idens);
	}

	@DeleteMapping(value = "/{id}")
	public void deleteMembre(@PathVariable Long id) {
		iMemberService.deleteMember(id);
	}

	@GetMapping("/fullmember/{id}")
	public Member findAFullMember(@PathVariable(name = "id") Long id) {
		Member mbr = iMemberService.findMember(id);

		mbr.setPubs(iMemberService.findPublicationparauteur(id));

		return mbr;
	}

}
