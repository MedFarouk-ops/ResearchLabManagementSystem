import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EvenementService } from 'src/app/_services/evenement.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  constructor(private es :EvenementService , private router: Router) {
  }

  ngOnInit(): void {
  }
  saveEvenement(event : any){
    this.es.createEvenement(event).subscribe( data =>{
      this.goToEventList();
    },
    error => console.log(error));
  }

  goToEventList(){
    this.router.navigate(['/evenement']);
  }
  
  onSubmit(data : any){
    console.log(data);
    this.saveEvenement(data);
  }

}
