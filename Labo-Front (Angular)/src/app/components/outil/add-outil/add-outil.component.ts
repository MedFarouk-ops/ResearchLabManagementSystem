import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OutilService } from 'src/app/_services/outil.service';
import { saveAs } from 'file-saver';
import { FileService } from 'src/app/_services/file.service';
import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Membre } from 'src/app/models/membre';
import { MembreService } from 'src/app/_services/membre.service';

@Component({
  selector: 'app-add-outil',
  templateUrl: './add-outil.component.html',
  styleUrls: ['./add-outil.component.css']
})
export class AddOutilComponent implements OnInit {

  selectedFiles : File[] ;
  
  filenames: string[] = [];
  fileStatus = { status: '', requestType: '', percent: 0 };
  membres : Membre[];

  
 
  constructor(private os :OutilService , private router: Router , private fs :FileService , private ms : MembreService) {
  }

  ngOnInit(): void {
    this.getMembres();
  }
  saveOutil(outil : any){
    this.os.createOutils(outil).subscribe( data =>{
      this.affectToAuter(Number(outil.memberId), Number(data.id) )
      this.goToOutilList();
    },
    error => console.log(error));
  }

  goToOutilList(){
    this.router.navigate(['/outil']);
  }
  
  onSubmit(data : any){
    console.log(data);
    data.source = this.selectedFiles[0].name;
    this.saveOutil(data);
  }

  /******************        Partie Affectation auteur au outils :  *************************/
  affectToAuter(idAuteur:number,idOutil:number) {
    this.ms.publishOutil(idAuteur,idOutil).subscribe(
      data => {
        console.log(data)
        this.router.navigate(["/outil"])
      }
    )
  }

  cancel(){
    this.router.navigate(['/outil']);
  }

  private getMembres(){
    this.ms.getMembersList().subscribe(data =>{
      this.membres=data;
    })
  }

/*********************************** */
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
