package com.example.demo.beans;

import java.util.Date;

public class PublicationBean {
	private Long id ;
	private Date date;
	private String type,titre,lien,sourcePdf;
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
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getTitre() {
		return titre;
	}
	public void setTitre(String titre) {
		this.titre = titre;
	}
	public String getLien() {
		return lien;
	}
	public void setLien(String lien) {
		this.lien = lien;
	}
	public String getSourcePdf() {
		return sourcePdf;
	}
	public void setSourcePdf(String sourcePdf) {
		this.sourcePdf = sourcePdf;
	}
	public PublicationBean(Long id, Date date, String type, String titre, String lien, String sourcePdf) {
		super();
		this.id = id;
		this.date = date;
		this.type = type;
		this.titre = titre;
		this.lien = lien;
		this.sourcePdf = sourcePdf;
	}
	public PublicationBean() {
		super();
	}
	public PublicationBean(Date date, String type, String titre, String lien, String sourcePdf) {
		super();
		this.date = date;
		this.type = type;
		this.titre = titre;
		this.lien = lien;
		this.sourcePdf = sourcePdf;
	}
	
	

}
