package com.example.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Outil implements Serializable{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	Date dateOutil;
	String source;
	public Outil() {
		super();
	}
	public Outil(Long id, Date dateOutil, String source) {
		super();
		this.id = id;
		this.dateOutil = dateOutil;
		this.source = source;
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
