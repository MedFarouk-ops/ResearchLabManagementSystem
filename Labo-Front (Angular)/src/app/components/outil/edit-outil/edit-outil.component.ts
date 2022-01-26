import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Outil } from 'src/app/models/outil';
import { OutilService } from 'src/app/_services/outil.service';
import { saveAs } from 'file-saver';
import { FileService } from 'src/app/_services/file.service';
import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-edit-outil',
  templateUrl: './edit-outil.component.html',
  styleUrls: ['./edit-outil.component.css']
})
export class EditOutilComponent implements OnInit {

  selectedFiles : File[] ;
  
  filenames: string[] = [];
  fileStatus = { status: '', requestType: '', percent: 0 };

  id: any;
  outil: Outil = new Outil();
  constructor(private os: OutilService,
    private route: ActivatedRoute,
    private router: Router,
    private fs : FileService
      ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.os.getOutilsById(this.id).subscribe(data => {
      this.outil = data;
    }, error => console.log(error));
  }

  onSubmit(){
    if(this.selectedFiles[0].name.length > 0 ){
      this.outil.source = this.selectedFiles[0].name;
    }
    this.os.updateOutil(this.id, this.outil).subscribe( data =>{
      this.goToOutilList();
    }
    , (error:any) => console.log(error));
  }

  goToOutilList(){
    this.router.navigate(['/outil']);
  }

  onUploadFiles(event : any): void {
    console.log(event);
    this.selectedFiles = <File[]>event.target.files;
    const formData = new FormData();
    formData.append('files', this.selectedFiles[0], this.selectedFiles[0].name )
    this.fs.upload(formData).subscribe(
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
