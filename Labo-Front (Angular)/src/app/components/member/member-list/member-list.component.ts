import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MembreService } from 'src/app/_services/membre.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import {MatTableDataSource} from '@angular/material/table';
import { Membre } from 'src/app/models/membre';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  displayedColumns: string[] = ["id", "cin", "name", "type", "cv", "createdDate","actions"];

  dataSource : MatTableDataSource<Membre>;   

  membres : Membre[];
  public nbMembres : number ;
  constructor(private membreService: MembreService , private router: Router ,private dialog : MatDialog) {
    this.dataSource = new MatTableDataSource(this.membreService.tab);
  }

  ngOnInit(): void {
    this.getMembers();
  }
  private getMembers(){
    this.membreService.getMembersList().subscribe(data =>{
      this.membres=data;
      this.nbMembres=this.membres.length;
      this.dataSource.data=data;
    }) 
  }

  // updateMembre(id: number){
  //   this.router.navigate(['edit-voucher', id]);
  // }

  // addMembre(){
  //   this.router.navigate(['add-voucher']);
  // }

  // showMembre(id: number){
  //   this.router.navigate(['show-voucher', id]);
  // }

  // deleteMembre(id: number){
  //   this.voucherService.deleteVoucher(id).subscribe( data => {
  //     console.log(data);
  //     this.getVouchers();
  //   })
  // }



  // constructor(private ms:MembreService , private router : Router , private dialog : MatDialog) {
  //   this.dataSource = new MatTableDataSource(this.ms.tab);
  // }

 
  // getAllMembers(){
  //   this.data = this.membreService.tab;
  // }

  // getData() :void {
  //   this.membreService.getAllMembers().then((data) => this.dataSource );
  // }

  // OnRemove(id : string) : void {
  //   // this.ms.RemoveMemberById(id).then(() => {this.getAllMembers();});
  //   const dialogRef = this.dialog.open(ConfirmDialogComponent,{});
  //   dialogRef.afterClosed().subscribe( 
  //     isDeleteConfirmed =>{ if (isDeleteConfirmed){ /* appel code de suppression */ }}
  //   )
  // }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
  
}
