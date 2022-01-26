package com.example.demo.beans;

import java.util.Date;

import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.example.demo.entities.EnseignantChercheur;

public class EtudiantBean {
	private Long id;
	private String cin;
	private String nom;
	private String prenom;
	@Temporal(TemporalType.DATE)
	private Date dateNaissance;
	private String cv;
	private byte[] photo;
	private String email;
	private String password;
	@Temporal(TemporalType.DATE)
	private Date dateInscription;
	private String sujet;
	private String diplome;
	private Long ensId ;
	public EtudiantBean(Long id, String cin, String nom, String prenom, Date dateNaissance, String cv, byte[] photo,
			String email, String password, Date dateInscription, String sujet, String diplome, Long ensId) {
		super();
		this.id = id;
		this.cin = cin;
		this.nom = nom;
		this.prenom = prenom;
		this.dateNaissance = dateNaissance;
		this.cv = cv;
		this.photo = photo;
		this.email = email;
		this.password = password;
		this.dateInscription = dateInscription;
		this.sujet = sujet;
		this.diplome = diplome;
		this.ensId = ensId;
	}
	public EtudiantBean() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getCin() {
		return cin;
	}
	public void setCin(String cin) {
		this.cin = cin;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public Date getDateNaissance() {
		return dateNaissance;
	}
	public void setDateNaissance(Date dateNaissance) {
		this.dateNaissance = dateNaissance;
	}
	public String getCv() {
		return cv;
	}
	public void setCv(String cv) {
		this.cv = cv;
	}
	public byte[] getPhoto() {
		return photo;
	}
	public void setPhoto(byte[] photo) {
		this.photo = photo;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Date getDateInscription() {
		return dateInscription;
	}
	public void setDateInscription(Date dateInscription) {
		this.dateInscription = dateInscription;
	}
	public String getSujet() {
		return sujet;
	}
	public void setSujet(String sujet) {
		this.sujet = sujet;
	}
	public String getDiplome() {
		return diplome;
	}
	public void setDiplome(String diplome) {
		this.diplome = diplome;
	}
	public Long getEnsId() {
		return ensId;
	}
	public void setEnsId(Long ensId) {
		this.ensId = ensId;
	} 
	
	
	
	
}
