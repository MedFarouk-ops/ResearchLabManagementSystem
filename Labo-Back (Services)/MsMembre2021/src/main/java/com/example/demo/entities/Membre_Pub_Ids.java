package com.example.demo.entities;

import java.io.Serializable;

import javax.persistence.Embeddable;
@Embeddable
public class Membre_Pub_Ids  implements Serializable{
private Long publication_id;
private Long auteur_id;

public Long getPublication_id() {
	return publication_id;
}
public void setPublication_id(Long publication_id) {
	this.publication_id = publication_id;
}
public Long getAuteur_id() {
	return auteur_id;
}
public void setAuteur_id(Long auteur_id) {
	this.auteur_id = auteur_id;
}
@Override
public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + ((auteur_id == null) ? 0 : auteur_id.hashCode());
	result = prime * result + ((publication_id == null) ? 0 : publication_id.hashCode());
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
	Membre_Pub_Ids other = (Membre_Pub_Ids) obj;
	if (auteur_id == null) {
		if (other.auteur_id != null)
			return false;
	} else if (!auteur_id.equals(other.auteur_id))
		return false;
	if (publication_id == null) {
		if (other.publication_id != null)
			return false;
	} else if (!publication_id.equals(other.publication_id))
		return false;
	return true;
}
public Membre_Pub_Ids(Long publication_id, Long auteur_id) {
	super();
	this.publication_id = publication_id;
	this.auteur_id = auteur_id;
}
public Membre_Pub_Ids() {
	super();
	// TODO Auto-generated constructor stub
}

}
