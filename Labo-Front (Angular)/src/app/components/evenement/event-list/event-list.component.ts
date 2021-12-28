import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Evenement } from 'src/app/models/evenement';
import { EvenementService } from 'src/app/_services/evenement.service';
import { ConfirmDialogComponent } from '../../member/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {


  events : Evenement[];
  constructor(private es: EvenementService , private router: Router ,private dialog : MatDialog) {
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

  deleteEvenement(id : any) : void {
    // this.ms.RemoveMemberById(id).then(() => {this.getAllMembers();});
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{});
    dialogRef.afterClosed().subscribe( 
      isDeleteConfirmed =>{ if (isDeleteConfirmed){ 
        
        this.es.deleteEvenement(id).subscribe( data => {
          console.log(data);
          this.router.navigate(['/evenement']);
        })

        console.log("deleted") }}
    )
  }
  edit(id : any){
    this.router.navigate(['evenement/edit', id]);
  }
}
