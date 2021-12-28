import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Publication } from 'src/app/models/publication';
import { PublicationService } from 'src/app/_services/publication.service';
import { ConfirmDialogComponent } from '../../member/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit {

  pubs : Publication[];
  constructor(private ps: PublicationService , private router: Router ,private dialog : MatDialog) {
    // this.dataSource = new MatTableDataSource(this.membreService.tab);
  }

  ngOnInit(): void {
    this.getMembers();
  }
  private getMembers(){
    this.ps.getPublicationsList().subscribe(data =>{
      this.pubs=data;
    }) 
  }

  deletePublication(id : any) : void {
    // this.ms.RemoveMemberById(id).then(() => {this.getAllMembers();});
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{});
    dialogRef.afterClosed().subscribe( 
      isDeleteConfirmed =>{ if (isDeleteConfirmed){ 
        
        this.ps.deletePublication(id).subscribe( data => {
          console.log(data);
          this.router.navigate(['/admin']);
        })

        console.log("deleted") }}
    )
  }


}
