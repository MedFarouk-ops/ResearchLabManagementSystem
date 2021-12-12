package com.example.demo.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

@Entity
public class Membre_Outil {
	@EmbeddedId
	private Membre_Tool_Ids id ;
	@ManyToOne @MapsId("utilisateur_id")
	private Member utilisateur;
	public Membre_Tool_Ids getId() {
		return id;
	}
	public void setId(Membre_Tool_Ids id) {
		this.id = id;
	}
	public Member getUtilisateur() {
		return utilisateur;
	}
	public void setUtilisateur(Member utilisateur) {
		this.utilisateur = utilisateur;
	}
	public Membre_Outil() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Membre_Outil(Membre_Tool_Ids id, Member utilisateur) {
		super();
		this.id = id;
		this.utilisateur = utilisateur;
	}

}
