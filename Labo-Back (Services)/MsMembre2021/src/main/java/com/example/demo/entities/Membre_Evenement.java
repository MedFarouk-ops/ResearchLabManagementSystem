package com.example.demo.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

@Entity
public class Membre_Evenement {
	@EmbeddedId
	private Membre_Event_Ids id ;
	@ManyToOne @MapsId("participant_id")
	private Member participant;
	public Member getParticipant() {
		return participant;
	}
	public void setParticipant(Member participant) {
		this.participant = participant;
	}
	public Membre_Event_Ids getId() {
		return id;
	}
	public Membre_Evenement() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Membre_Evenement(Membre_Event_Ids id, Member participant) {
		super();
		this.id = id;
		this.participant = participant;
	}
	public void setId(Membre_Event_Ids id) {
		this.id = id;
	}
	

}
