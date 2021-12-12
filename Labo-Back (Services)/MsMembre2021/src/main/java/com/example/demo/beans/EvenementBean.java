package com.example.demo.beans;

import java.util.Date;

public class EvenementBean {
	public EvenementBean(Date date, String lieu, String titre) {
		super();
		this.date = date;
		this.lieu = lieu;
		this.titre = titre;
	}
	private Long id ;
	private Date date;
	private String lieu,titre;
	public EvenementBean() {
		super();
		// TODO Auto-generated constructor stub
	}
	public EvenementBean(Long id, Date date, String lieu, String titre) {
		super();
		this.id = id;
		this.date = date;
		this.lieu = lieu;
		this.titre = titre;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getLieu() {
		return lieu;
	}
	public void setLieu(String lieu) {
		this.lieu = lieu;
	}
	public String getTitre() {
		return titre;
	}
	public void setTitre(String titre) {
		this.titre = titre;
	}

}
