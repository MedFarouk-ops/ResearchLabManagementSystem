import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evenement } from 'src/app/models/evenement';
import { EvenementService } from 'src/app/_services/evenement.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  id: any;
  event: Evenement = new Evenement();
  constructor(private es: EvenementService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.es.getEvenementsById(this.id).subscribe(data => {
      this.event = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.es.updateEvenement(this.id, this.event).subscribe( data =>{
      this.goToEventList();
    }
    , (error:any) => console.log(error));
  }

  goToEventList(){
    this.router.navigate(['/evenement']);
  }

}
