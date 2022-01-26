import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Membre } from 'src/app/models/membre';
import { FileService } from 'src/app/_services/file.service';
import { MembreService } from 'src/app/_services/membre.service';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-visitor-membres',
  templateUrl: './visitor-membres.component.html',
  styleUrls: ['./visitor-membres.component.css']
})
export class VisitorMembresComponent implements OnInit {
 
  filenames: string[] = [];
  fileStatus = { status: '', requestType: '', percent: 0 };  
  membres : Membre[];
  constructor(private membreService: MembreService , private router: Router , private fs : FileService ) {
  }

  ngOnInit(): void {
    this.getMembers();
  }
  private getMembers(){
    this.membreService.getMembersList().subscribe(data =>{
      this.membres=data;
    }) 
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
