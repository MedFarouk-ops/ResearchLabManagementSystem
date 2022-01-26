import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Publication } from 'src/app/models/publication';
import { FileService } from 'src/app/_services/file.service';
import { PublicationService } from 'src/app/_services/publication.service';
import { ConfirmDialogComponent } from '../../member/confirm-dialog/confirm-dialog.component';
import { saveAs } from 'file-saver';
import { Evenement } from 'src/app/models/evenement';
import { EvenementService } from 'src/app/_services/evenement.service';


@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit {

  pubs : Publication[];
  filenames: string[] = [];
  fileStatus = { status: '', requestType: '', percent: 0 };  

  constructor(private ps: PublicationService ,private es : EvenementService, private router: Router ,private dialog : MatDialog , private fs : FileService) {
    // this.dataSource = new MatTableDataSource(this.membreService.tab);
  }

  events : Evenement[];

  private getEvenements(){
    this.es.getEvenementsList().subscribe(data =>{
      this.events=data;
    }) 
  }

  ngOnInit(): void {
    this.getPublications();
    this.getEvenements();
  }
  private getPublications(){
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
          this.router.navigate(['/publication']);
        })

        console.log("deleted") }}
    )
  }
  edit(id : any){
    this.router.navigate(['publication/edit', id]);
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
