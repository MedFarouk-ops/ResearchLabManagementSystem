package com.example.demo.entities;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
@DiscriminatorValue("ens")
public class EnseignantChercheur extends Member implements Serializable {
	private String etablissement;
	private String grade;
	
	// en cas ou la relation est bidiractionnelle
	//@OneToMany(mappedBy = "encadrant")
	//@JsonIgnore
	//private Collection<Etudiant> etudiants;
	public String getEtablissement() {
		return etablissement;
	}
	public void setEtablissement(String etablissement) {
		this.etablissement = etablissement;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public EnseignantChercheur() {
		super();
		// TODO Auto-generated constructor stub
	}
	public EnseignantChercheur(String cin, String nom, String prenom, Date dateNaissance, String cv, byte[] photo,
			String email, String password,  String etablissement,String grade) {
		super(cin, nom, prenom, dateNaissance, cv, photo, email, password);
		this.grade=grade;
		this.etablissement=etablissement;
	}
	

}
