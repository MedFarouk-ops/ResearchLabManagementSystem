package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entities.Membre_Outil;
import com.example.demo.entities.Membre_Pub_Ids;
import com.example.demo.entities.Membre_Publication;
import com.example.demo.entities.Membre_Tool_Ids;

public interface Membretoolrepository extends JpaRepository<Membre_Outil, Membre_Tool_Ids> {
	@Query("select m from Membre_Outil m where utilisateur_id=:x")
	List<Membre_Outil> findtoolId(@Param ("x") Long utiId);

}
