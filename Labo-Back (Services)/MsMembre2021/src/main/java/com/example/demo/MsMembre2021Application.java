package com.example.demo;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

import com.example.demo.beans.PublicationBean;
import com.example.demo.dao.EtudiantRepository;
import com.example.demo.dao.MembreRepository;
import com.example.demo.entities.EnseignantChercheur;
import com.example.demo.entities.Etudiant;
import com.example.demo.entities.Member;
import com.example.demo.proxies.PublicationProxyService;
import com.example.demo.service.IMemberService;

@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients
public class MsMembre2021Application implements CommandLineRunner{
	@Autowired
	MembreRepository membreRepository;
	@Autowired
	EtudiantRepository etudiantrepository;
	
	@Autowired
	IMemberService iMemberService;
	@Autowired
	PublicationProxyService publicationProxyService;

	public static void main(String[] args) {
		SpringApplication.run(MsMembre2021Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		EnseignantChercheur ens1= new EnseignantChercheur("01752354", "Jmaiel", "Mohamed", new Date(), "",null, "jmaiel@enis.tn", "0000", "ENIS", "Professeur");
		membreRepository.save(ens1);
		
		Member ens2= new EnseignantChercheur("01752354", "mariam", "lahami", new Date(), "",null,  "lahami@enis.tn", "2222", "ENIS", "MA");
	
		membreRepository.save(ens2);
		
		SimpleDateFormat dateFormatter =new SimpleDateFormat("yyyy-MM-dd");
		Date date1 = dateFormatter.parse("2010-05-01");
		Date date2 = dateFormatter.parse("2019-05-01");
		Date date3 = dateFormatter.parse("2012-05-01");
		Date date4 = dateFormatter.parse("2012-03-01");
		Etudiant etd1= new Etudiant("081705454", "ben fekih", "rim", date1, "",  null,"rim@enis.rn", "11111", date1, "test", "these",null);
		Etudiant etd2= new Etudiant("885705454", "ben ahmed", "sana", date2, "", null, "sana@enis.rn", "11111", date2, "test", "mastere",null);
		Etudiant etd3= new Etudiant("081454", "chaari", "rim", date3, "",null,  "chaari@enis.rn", "11111", date3, "test", "these", null);
		Etudiant etd4= new Etudiant("081454", "ayadi", "ali", date4, "",null,  "ayadi@enis.rn", "11111", date4, "test", "mastre",null);
		membreRepository.save(etd1);
		membreRepository.save(etd2);
		membreRepository.save(etd3);
		membreRepository.save(etd4);
		// Update a Member
		Member m= iMemberService.findMember(1L);
		m.setCv("cv1.pdf");
		iMemberService.updateMember(m);
		// Delete a Member
		iMemberService.deleteMember(2L);
		
		iMemberService.affecterencadrantToetudiant(3L, 1L);
		iMemberService.affecterencadrantToetudiant(4L, 1L);
		
		//// find etudiants encadré par 1
		
		List<Etudiant> etds=etudiantrepository.findByEncadrant(ens1);
		System.out.println(etds.size());
		
		// tester proxies
		
		PublicationBean pub=publicationProxyService.findPublicationById(1L);
		 System.out.println(pub.getTitre()+ " "+pub.getType());
		 
		// affecter auteur to pub
		 iMemberService.affecterauteurTopublication(1L, 1L);
		 iMemberService.affecterauteurTopublication(1L, 2L);
		 iMemberService.affecterauteurTopublication(3L, 3L);
		// recupérer pub par auteur id =1
		 
		List<PublicationBean> lstpub=iMemberService.findPublicationparauteur(1L);
		
		lstpub.forEach(p->
		System.out.println(p.getTitre()+ " "+p.getType())
		);
		
		
		
		
	}

}
