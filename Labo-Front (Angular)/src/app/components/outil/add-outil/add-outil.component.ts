import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OutilService } from 'src/app/_services/outil.service';

@Component({
  selector: 'app-add-outil',
  templateUrl: './add-outil.component.html',
  styleUrls: ['./add-outil.component.css']
})
export class AddOutilComponent implements OnInit {

  constructor(private os :OutilService , private router: Router) {
  }

  ngOnInit(): void {
  }
  saveOutil(outil : any){
    this.os.createOutils(outil).subscribe( data =>{
      this.goToOutilList();
    },
    error => console.log(error));
  }

  goToOutilList(){
    this.router.navigate(['/outil']);
  }
  
  onSubmit(data : any){
    console.log(data);
    this.saveOutil(data);
  }
}
