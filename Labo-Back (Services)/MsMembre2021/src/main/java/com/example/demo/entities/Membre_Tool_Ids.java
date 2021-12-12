package com.example.demo.entities;

import java.io.Serializable;

import javax.persistence.Embeddable;

@Embeddable
public class Membre_Tool_Ids implements Serializable{
	private Long outil_id;
	private Long utilisateur_id;
	public Membre_Tool_Ids() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Membre_Tool_Ids(Long outil_id, Long utilisateur_id) {
		super();
		this.outil_id = outil_id;
		this.utilisateur_id = utilisateur_id;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((outil_id == null) ? 0 : outil_id.hashCode());
		result = prime * result + ((utilisateur_id == null) ? 0 : utilisateur_id.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Membre_Tool_Ids other = (Membre_Tool_Ids) obj;
		if (outil_id == null) {
			if (other.outil_id != null)
				return false;
		} else if (!outil_id.equals(other.outil_id))
			return false;
		if (utilisateur_id == null) {
			if (other.utilisateur_id != null)
				return false;
		} else if (!utilisateur_id.equals(other.utilisateur_id))
			return false;
		return true;
	}
	public Long getOutil_id() {
		return outil_id;
	}
	public void setOutil_id(Long outil_id) {
		this.outil_id = outil_id;
	}
	public Long getUtilisateur_id() {
		return utilisateur_id;
	}
	public void setUtilisateur_id(Long utilisateur_id) {
		this.utilisateur_id = utilisateur_id;
	}
	

}
