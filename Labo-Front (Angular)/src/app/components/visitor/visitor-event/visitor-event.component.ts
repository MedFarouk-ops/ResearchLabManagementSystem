import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Evenement } from 'src/app/models/evenement';
import { EvenementService } from 'src/app/_services/evenement.service';
import { ConfirmDialogComponent } from '../../member/confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-visitor-event',
  templateUrl: './visitor-event.component.html',
  styleUrls: ['./visitor-event.component.css']
})
export class VisitorEventComponent implements OnInit {


  events : Evenement[];
  constructor(private es: EvenementService , private router: Router ) {
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
