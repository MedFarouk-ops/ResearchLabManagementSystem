import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicationService } from 'src/app/_services/publication.service';

@Component({
  selector: 'app-add-pub',
  templateUrl: './add-pub.component.html',
  styleUrls: ['./add-pub.component.css']
})
export class AddPubComponent implements OnInit {
  constructor(private ps :PublicationService , private router: Router) {
  }

  ngOnInit(): void {
  }
  savePublication(pub : any){
    this.ps.createPublication(pub).subscribe( data =>{
      this.goToPubList();
    },
    error => console.log(error));
  }

  goToPubList(){
    this.router.navigate(['/publication']);
  }
  
  onSubmit(data : any){
    console.log(data);
    this.savePublication(data);
  }
}
