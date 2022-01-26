import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Outil } from 'src/app/models/outil';
import { FileService } from 'src/app/_services/file.service';
import { OutilService } from 'src/app/_services/outil.service';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-visitor-membres-tools',
  templateUrl: './visitor-membres-tools.component.html',
  styleUrls: ['./visitor-membres-tools.component.css']
})
export class VisitorMembresToolsComponent implements OnInit {

  
  filenames: string[] = [];
  fileStatus = { status: '', requestType: '', percent: 0 };  

  outils : Outil[];
  constructor(private os: OutilService , private router: Router  , private fs :FileService) {
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
