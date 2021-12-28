package com.example.demo.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Evenement implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	@Temporal(TemporalType.DATE)
	Date dateOutil;
	String titre, lieu;
	public Evenement() {
		super();
	}
	public Evenement(Long id, Date dateOutil, String titre, String lieu) {
		super();
		this.id = id;
		this.dateOutil = dateOutil;
		this.titre = titre;
		this.lieu = lieu;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Date getDateOutil() {
		return dateOutil;
	}
	public void setDateOutil(Date dateOutil) {
		this.dateOutil = dateOutil;
	}
	public String getTitre() {
		return titre;
	}
	public void setTitre(String titre) {
		this.titre = titre;
	}
	public String getLieu() {
		return lieu;
	}
	public void setLieu(String lieu) {
		this.lieu = lieu;
	}
	
	
	
}
