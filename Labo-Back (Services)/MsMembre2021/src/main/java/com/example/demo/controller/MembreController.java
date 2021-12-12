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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.EnseignantChercheur;
import com.example.demo.entities.Etudiant;
import com.example.demo.entities.Member;
import com.example.demo.service.IMemberService;
@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class MembreController {
	@Autowired
	IMemberService iMemberService;
	
	@GetMapping(value = "/membres")
	public List<Member> findAllmembres()
	{
		return iMemberService.findAll();
	}

	@GetMapping(value = "/membres/{id}")
	public Member findoneMembre(@PathVariable Long id)
	{
		return iMemberService.findMember(id);
	}
	
	@PostMapping(value = "/membres/etudiant")
	public Member addMembre(@RequestBody Etudiant etd)
	{
		return iMemberService.addMember(etd);
	}

	@PostMapping(value = "/membres/enseignant")
	public Member addMembre(@RequestBody EnseignantChercheur ens)
	{
		return iMemberService.addMember(ens);
	}
	@PutMapping(value="/membres/etudiant/{id}")
	public Member updatemembre(@PathVariable Long id, @RequestBody Etudiant p)
	{
		p.setId(id);
		return iMemberService.updateMember(p);
	}

	@PutMapping(value="/membres/enseignant/{id}")
	public Member updateMembre(@PathVariable Long id, @RequestBody EnseignantChercheur p)
	{
		p.setId(id);
	       return iMemberService.updateMember(p);
	}
	@PutMapping(value="/membres/etudiant")
	public Member affecter(@RequestParam Long idetd , @RequestParam Long idens )
	{
		
	       return iMemberService.affecterencadrantToetudiant(idetd, idens);
	}
	@DeleteMapping(value="/membres/{id}")
	public void deleteMembre(@PathVariable Long id)
	{
		iMemberService.deleteMember(id);
	}

	@GetMapping("/fullmember/{id}")
	public Member findAFullMember(@PathVariable(name="id") Long id)
	{
		Member mbr=iMemberService.findMember(id);

		mbr.setPubs(iMemberService.findPublicationparauteur(id));
		mbr.setEvents(iMemberService.findEvenementparparticipant(id));
		mbr.setTools(iMemberService.findOutilparutilisateur(id));

	return mbr;
	}


}
