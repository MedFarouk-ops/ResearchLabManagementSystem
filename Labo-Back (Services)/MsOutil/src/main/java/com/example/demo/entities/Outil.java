package com.example.demo.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Outil {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)	Long id;
	@Temporal(TemporalType.DATE)
	Date dateOutil;
	String source;
	public Outil(Long id, Date dateOutil, String source) {
		super();
		this.id = id;
		this.dateOutil = dateOutil;
		this.source = source;
	}
	public Outil() {
		super();
		// TODO Auto-generated constructor stub
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
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	

}
