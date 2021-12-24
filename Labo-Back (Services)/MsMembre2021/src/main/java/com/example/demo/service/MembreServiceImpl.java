package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.beans.PublicationBean;
import com.example.demo.dao.EnseignantRepository;
import com.example.demo.dao.EtudiantRepository;
import com.example.demo.dao.MembreRepository;
import com.example.demo.dao.Membrepubrepository;
import com.example.demo.entities.EnseignantChercheur;
import com.example.demo.entities.Etudiant;
import com.example.demo.entities.Member;
import com.example.demo.entities.Membre_Pub_Ids;
import com.example.demo.entities.Membre_Publication;
import com.example.demo.proxies.PublicationProxyService;

@Service
public class MembreServiceImpl implements IMemberService{

	@Autowired
	MembreRepository membreRepository;
	@Autowired
	EtudiantRepository etudiantRepository;
	@Autowired
	EnseignantRepository enseignantRepository;
	@Autowired
	Membrepubrepository membrepubrepository;
	@Autowired
	PublicationProxyService publicationProxyService;
	
	
	public Member addMember(Member m) {
		return membreRepository.save(m);
	}
	public void deleteMember(Long id) {
		if(membreRepository.findById(id).isPresent())
			membreRepository.deleteById(id);	
	}
	public Member updateMember(Member p) {	
		return membreRepository.saveAndFlush(p);
	}
	public Member findMember(Long id) {
		return membreRepository.findById(id).get();
	}
	public List<Member> findAll() {
		return membreRepository.findAll();
	}
	public Member findByCin(String cin) {
		
		return membreRepository.findByCin(cin);
	}
	public Member findByEmail(String email) {
		
		return membreRepository.findByEmail(email);
	}
	public List<Member> findByNom(String nom) {
		
		return membreRepository.findByNomStartingWith(nom);
	}

	@Override
	public List<Etudiant> findByDiplome(String diplome) {
		
		return etudiantRepository.findByDiplome(diplome);
	}

	@Override
	public List<EnseignantChercheur> findByGrade(String grade) {
		
		return enseignantRepository.findByGrade(grade);
	}

	@Override
	public List<EnseignantChercheur> findByEtablissement(String etablissement) {
		
		return enseignantRepository.findByEtablissement(etablissement);
	}

	@Override
	public Etudiant affecterencadrantToetudiant(Long idetd, Long idens) {
		Etudiant etd= etudiantRepository.findById(idetd).get();
		EnseignantChercheur ens=enseignantRepository.findById(idens).get();
		etd.setEncadrant(ens);
		return etudiantRepository.save(etd);
	}
	@Override
	public List<Etudiant> findEtudiantsByEncadrant(Long idens) {
		
		EnseignantChercheur ens=enseignantRepository.findById(idens).get();

		return etudiantRepository.findByEncadrant(ens);
	}
	@Override
	public void affecterauteurTopublication(Long idauteur, Long idpub) {
		Member mbr= membreRepository.findById(idauteur).get();
		Membre_Publication mbs= new Membre_Publication();
		mbs.setAuteur(mbr);
		mbs.setId(new Membre_Pub_Ids(idpub, idauteur));
		membrepubrepository.save(mbs);
			
	}
	
	public List<PublicationBean> findPublicationparauteur(Long idauteur) {
		List<PublicationBean> pubs= new ArrayList<PublicationBean>();
		List< Membre_Publication> idpubs=membrepubrepository.findpubId(idauteur);

		idpubs.forEach(s->
		
		pubs.add(publicationProxyService.findPublicationById(s.getId().getPublication_id())));
		
		return pubs;
	}

}
