package com.example.demo.service;

import java.util.List;

import com.example.demo.beans.PublicationBean;
import com.example.demo.entities.EnseignantChercheur;
import com.example.demo.entities.Etudiant;
import com.example.demo.entities.Member;

public interface IMemberService {
	//Crud sur les membres 
	public Member addMember(Member m);
	public void deleteMember(Long id) ;
	public Member updateMember(Member p) ;
	public Member findMember(Long id) ;
	public List<Member> findAll();
	//Filtrage par propriété
	public Member findByCin(String cin);
	public Member findByEmail(String email);
	public List<Member> findByNom(String nom);
	//recherche spécifique des étudiants
	public List<Etudiant> findByDiplome(String diplome);
	//recherche spécifique des enseignants
	public List<EnseignantChercheur> findByGrade(String grade);
	public List<EnseignantChercheur> findByEtablissement(String etablissement);


	public Etudiant affecterencadrantToetudiant(Long idetd, Long idens);
	
	public List<Etudiant> findEtudiantsByEncadrant(Long idens);
	
	public void affecterauteurTopublication(Long idauteur, Long idpub);

	public List<PublicationBean> findPublicationparauteur (Long idauteur);

	
}
