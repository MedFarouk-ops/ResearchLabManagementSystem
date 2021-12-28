import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnseignementChercheur } from 'src/app/models/enseignement-chercheur';
import { MembreService } from 'src/app/_services/membre.service';

@Component({
  selector: 'app-edit-enseignant',
  templateUrl: './edit-enseignant.component.html',
  styleUrls: ['./edit-enseignant.component.css']
})
export class EditEnseignantComponent implements OnInit {

  id: any;
  ens: EnseignementChercheur = new EnseignementChercheur();
  constructor(private ms: MembreService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.ms.getEnsById(this.id).subscribe(data => {
      this.ens = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.ms.updateMemberEns(this.id, this.ens).subscribe( data =>{
      this.goToMemberList();
    }
    , (error:any) => console.log(error));
  }

  goToMemberList(){
    this.router.navigate(['/admin']);
  }
}
