import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Membre } from 'src/app/models/membre';
import { MembreService } from 'src/app/_services/membre.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: string;
  membre: Membre ;
  constructor(private ms: MembreService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.ms.getMemberById(this.id).subscribe(data => {
      this.membre = data;
    }, error => console.log(error));
  }

  
}
