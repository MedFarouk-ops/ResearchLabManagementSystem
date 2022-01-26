import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileService } from 'src/app/_services/file.service';
import { PublicationService } from 'src/app/_services/publication.service';
import { saveAs } from 'file-saver';
import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Membre } from 'src/app/models/membre';
import { MembreService } from 'src/app/_services/membre.service';


@Component({
  selector: 'app-add-pub',
  templateUrl: './add-pub.component.html',
  styleUrls: ['./add-pub.component.css']
})
export class AddPubComponent implements OnInit {

  selectedFiles : File[] ;
  
  filenames: string[] = [];
  fileStatus = { status: '', requestType: '', percent: 0 };
  membres : Membre[];
  mbr : Membre ; 
 
  constructor(private ps :PublicationService , private router: Router , private fs : FileService , 
    private ms : MembreService) {
  }

  ngOnInit(): void {
    this.getMembres();
  }
  savePublication(pub : any){
    this.ps.createPublication(pub).subscribe( (data) => {
      this.affectToAuter(Number(pub.memberId), Number(data.id) )
      this.goToPubList()
    },
    (error: HttpErrorResponse) => { alert(error.message) }
  );
    
  }

  goToPubList(){
    this.router.navigate(['/publication']);
  }
  
  onSubmit(data : any){
    console.log("---------------test----------------");
    console.log(data);
    data.sourcePdf = this.selectedFiles[0].name;
    this.savePublication(data);    
  }

  affectToAuter(idAuteur:number,idPublication:number) {
    this.ms.publish(idAuteur,idPublication).subscribe(
      data => {
        console.log(data)
        this.router.navigate(["/publication"])
      }
    )
  }

  cancel(){
    this.router.navigate(['/publication']);
  }

  private getMembres(){
    this.ms.getMembersList().subscribe(data =>{
      this.membres=data;
    })
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
