package com.example.demo.beans;

import java.util.Date;

public class Publication {
	Long id;
	String titre;
	Date dateapparition;
	String type;
	Long memberId;
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
	
	public Publication( String titre, Date dateapparition, String type, Long memberId) {
		super();
		this.titre = titre;
		this.dateapparition = dateapparition;
		this.type = type;
		this.memberId = memberId;
	}
	public Publication() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getMemberId() {
		return memberId;
	}
	public void setMemberId(Long memberId) {
		this.memberId = memberId;
	}
	
}
