import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MembreService } from 'src/app/_services/membre.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import {MatTableDataSource} from '@angular/material/table';
import { Membre } from 'src/app/models/membre';
import { FileService } from 'src/app/_services/file.service';
import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  displayedColumns: string[] = ["id", "cin", "name", "type", "cv", "createdDate","actions"];

  dataSource : MatTableDataSource<Membre>; 
  filenames: string[] = [];
  fileStatus = { status: '', requestType: '', percent: 0 };  

  membres : Membre[];
  public nbMembres : number ;
  constructor(private membreService: MembreService , private router: Router ,private dialog : MatDialog , private fs :FileService) {
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


  deleteMembre(id : any) : void {
    // this.ms.RemoveMemberById(id).then(() => {this.getAllMembers();});
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{});
    dialogRef.afterClosed().subscribe( 
      isDeleteConfirmed =>{ if (isDeleteConfirmed){ 
        
        this.membreService.deleteMembre(id).subscribe( data => {
          console.log(data);
          this.router.navigate(['/admin']);
        })

        console.log("deleted") }}
    )
  }

  editEtudiant(id : any){
    this.router.navigate(['edit-etd', id]);
  }

  editEnseignant(id : any){
    this.router.navigate(['edit-ens', id]);
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  showProfile(id : any){
    this.router.navigate(['profile', id]);
  }


  onDownloadFile(filename: string): void {
    this.fs.download(filename).subscribe(
      event => {
        console.log(event);
        this.resportProgress(event);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  private resportProgress(httpEvent: HttpEvent<string[] | Blob>): void {
    switch(httpEvent.type) {
      case HttpEventType.UploadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Uploading... ');
        break;
      case HttpEventType.DownloadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Downloading... ');
        break;
      case HttpEventType.ResponseHeader:
        console.log('Header returned', httpEvent);
        break;
      case HttpEventType.Response:
        if (httpEvent.body instanceof Array) {
          this.fileStatus.status = 'done';
          for (const filename of httpEvent.body) {
            this.filenames.unshift(filename);
          }
        } else {
          saveAs(new File([httpEvent.body!], httpEvent.headers.get('File-Name')!, 
                  {type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}));
          // saveAs(new Blob([httpEvent.body!], 
          //   { type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}),
          //    httpEvent.headers.get('File-Name'));
        }
        this.fileStatus.status = 'done';
        break;
        default:
          console.log(httpEvent);
          break;
      
    }
  }
  
  private updateStatus(loaded: number, total: number, requestType: string): void {
    this.fileStatus.status = 'progress';
    this.fileStatus.requestType = requestType;
    this.fileStatus.percent = Math.round(100 * loaded / total);
  }


  
}
