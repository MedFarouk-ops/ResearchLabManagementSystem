package com.example.demo.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Embeddable;
@Embeddable
public class Membre_Outil_Ids implements Serializable{
	private Long outil_id;
	private Long auteur_id;
	public Long getOutil_id() {
		return outil_id;
	}
	public void setOutil_id(Long outil_id) {
		this.outil_id = outil_id;
	}
	public Long getAuteur_id() {
		return auteur_id;
	}
	public void setAuteur_id(Long auteur_id) {
		this.auteur_id = auteur_id;
	}
	@Override
	public int hashCode() {
		return Objects.hash(auteur_id, outil_id);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Membre_Outil_Ids other = (Membre_Outil_Ids) obj;
		return Objects.equals(auteur_id, other.auteur_id) && Objects.equals(outil_id, other.outil_id);
	}
	public Membre_Outil_Ids(Long outil_id, Long auteur_id) {
		super();
		this.outil_id = outil_id;
		this.auteur_id = auteur_id;
	}
	
	public Membre_Outil_Ids() {
		super();
	}
	
	
	

}
