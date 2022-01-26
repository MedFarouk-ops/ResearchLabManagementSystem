import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Evenement } from 'src/app/models/evenement';
import { Membre } from 'src/app/models/membre';
import { EvenementService } from 'src/app/_services/evenement.service';
import { MembreService } from 'src/app/_services/membre.service';

@Component({
  selector: 'app-admin-index',
  templateUrl: './admin-index.component.html',
  styleUrls: ['./admin-index.component.css']
})
export class AdminIndexComponent implements OnInit {

  events : Evenement[];
  constructor(private es: EvenementService ,private ms:MembreService, private router: Router ,private dialog : MatDialog) {
    // this.dataSource = new MatTableDataSource(this.membreService.tab);
  }

  ngOnInit(): void {
    this.getEvenements();
  }
  private getEvenements(){
    this.es.getEvenementsList().subscribe(data =>{
      this.events=data;
    }) 
  }

}
