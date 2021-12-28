import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evenement } from 'src/app/models/evenement';
import { Membre } from 'src/app/models/membre';
import { Outil } from 'src/app/models/outil';
import { Publication } from 'src/app/models/publication';
import { EvenementService } from 'src/app/_services/evenement.service';
import { MembreService } from 'src/app/_services/membre.service';
import { OutilService } from 'src/app/_services/outil.service';
import { PublicationService } from 'src/app/_services/publication.service';
import { MemberListComponent } from '../../member/member-list/member-list.component';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  public membres :Membre[];
  public nbMembres : number ;


  public publications :Publication[];
  public nbPubs : number ;

  public events :Evenement[];
  public nbEvents : number ;

  public outils :Outil[];
  public nbOutils : number ;

  constructor(private membreService: MembreService , private ps : PublicationService, private es :EvenementService,private os :OutilService, private router: Router ) {

  }

  ngOnInit(): void {
    this.getMembers();
  }
  private getMembers(){
    this.membreService.getMembersList().subscribe(data =>{
      this.membres=data;
      this.nbMembres=this.membres.length;
    })
    this.ps.getPublicationsList().subscribe(data =>{
      this.publications=data;
      this.nbPubs=this.publications.length;
    })
    this.es.getEvenementsList().subscribe(data =>{
      this.events=data;
      this.nbEvents=this.events.length;
    })
    this.os.getOutilsList().subscribe(data =>{
      this.outils=data;
      this.nbOutils=this.outils.length;
    })
  }
}
