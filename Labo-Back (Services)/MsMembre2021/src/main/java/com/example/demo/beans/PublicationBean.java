package com.example.demo.beans;

import java.util.Date;

public class PublicationBean {
	Long id;
	String titre;
	Date dateapparition;
	String type;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitre() {
		return titre;
	}
	public void setTitre(String titre) {
		this.titre = titre;
	}
	public Date getDateapparition() {
		return dateapparition;
	}
	public void setDateapparition(Date dateapparition) {
		this.dateapparition = dateapparition;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public PublicationBean(String titre, Date dateapparition, String type) {
		super();
		this.titre = titre;
		this.dateapparition = dateapparition;
		this.type = type;
	}
	public PublicationBean() {
		super();
		// TODO Auto-generated constructor stub
	}
	

}
