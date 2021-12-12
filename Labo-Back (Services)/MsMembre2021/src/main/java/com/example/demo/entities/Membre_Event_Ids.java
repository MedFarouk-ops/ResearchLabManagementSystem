package com.example.demo.entities;

import java.io.Serializable;

import javax.persistence.Embeddable;

@Embeddable
public class Membre_Event_Ids implements Serializable{
	public Membre_Event_Ids() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((participant_id == null) ? 0 : participant_id.hashCode());
		result = prime * result + ((evenement_id == null) ? 0 : evenement_id.hashCode());
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
		Membre_Event_Ids other = (Membre_Event_Ids) obj;
		if (participant_id == null) {
			if (other.participant_id != null)
				return false;
		} else if (!participant_id.equals(other.participant_id))
			return false;
		if (evenement_id == null) {
			if (other.evenement_id != null)
				return false;
		} else if (!evenement_id.equals(other.evenement_id))
			return false;
		return true;
	}
	private Long evenement_id;
	private Long participant_id;
	public Long getEvenement_id() {
		return evenement_id;
	}
	public void setEvenement_id(Long evenement_id) {
		this.evenement_id = evenement_id;
	}
	
	public Long getParticipant_id() {
		return participant_id;
	}
	public void setParticipant_id(Long participant_id) {
		this.participant_id = participant_id;
	}
	public Membre_Event_Ids(Long evenement_id, Long participant_id) {
		super();
		this.evenement_id = evenement_id;
		this.participant_id = participant_id;
	}

}
