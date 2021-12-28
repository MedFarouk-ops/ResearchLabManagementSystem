import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Membre } from 'src/app/models/membre';
import { Publication } from 'src/app/models/publication';
import { MembreService } from 'src/app/_services/membre.service';
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

  constructor(private membreService: MembreService , private ps : PublicationService, private router: Router ) {

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
    
  }
}
