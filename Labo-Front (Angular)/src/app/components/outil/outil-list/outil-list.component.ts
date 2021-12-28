import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Outil } from 'src/app/models/outil';
import { OutilService } from 'src/app/_services/outil.service';
import { ConfirmDialogComponent } from '../../member/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-outil-list',
  templateUrl: './outil-list.component.html',
  styleUrls: ['./outil-list.component.css']
})
export class OutilListComponent implements OnInit {


  outils : Outil[];
  constructor(private os: OutilService , private router: Router ,private dialog : MatDialog) {
    // this.dataSource = new MatTableDataSource(this.membreService.tab);
  }

  ngOnInit(): void {
    this.getOutils();
  }
  private getOutils(){
    this.os.getOutilsList().subscribe(data =>{
      this.outils=data;
    }) 
  }

  deleteOutil(id : any) : void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{});
    dialogRef.afterClosed().subscribe( 
      isDeleteConfirmed =>{ if (isDeleteConfirmed){ 
        
        this.os.deleteOutil(id).subscribe( data => {
          console.log(data);
          this.router.navigate(['/outils']);
        })

        console.log("deleted") }}
    )
  }
  edit(id : any){
    this.router.navigate(['outil/edit', id]);
  }

}
