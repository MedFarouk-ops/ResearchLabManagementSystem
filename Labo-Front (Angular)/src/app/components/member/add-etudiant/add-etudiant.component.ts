import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/models/etudiant';
import { Membre } from 'src/app/models/membre';
import { FileService } from 'src/app/_services/file.service';
import { saveAs } from 'file-saver';
import { MembreService } from 'src/app/_services/membre.service';
import { EnseignementChercheur } from 'src/app/models/enseignement-chercheur';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {
  
  selectedFiles : File[] ;
  
  enseignants : EnseignementChercheur[];

  filenames: string[] = [];
  fileStatus = { status: '', requestType: '', percent: 0 };
  constructor(private memberService :MembreService , private router: Router , private fs : FileService , private ms :MembreService) {
  }

  ngOnInit(): void {
    this.getEnseignants();
  }
  saveMembre(etud : any){

    this.memberService.saveMembreEtd(etud).subscribe( data =>{
      this.goToMemberList();
    },
    error => console.log(error));
  }

  goToMemberList(){
    this.router.navigate(['/admin']);
  }
  
  onSubmit(data : any){
    console.log(data);
    data.cv = this.selectedFiles[0].name;
    this.saveMembre(data);
  }

  private getEnseignants(){
    this.ms.getEnsList().subscribe(data =>{
      this.enseignants=data;
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
