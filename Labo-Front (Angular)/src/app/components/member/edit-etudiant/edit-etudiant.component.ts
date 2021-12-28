import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/models/etudiant';
import { MembreService } from 'src/app/_services/membre.service';

@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.css']
})
export class EditEtudiantComponent implements OnInit {

  id: any;
  etd: Etudiant = new Etudiant();
  constructor(private ms: MembreService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.ms.getEtdById(this.id).subscribe(data => {
      this.etd = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.ms.updateMemberEtd(this.id, this.etd).subscribe( data =>{
      this.goToMemberList();
    }
    , (error:any) => console.log(error));
  }

  goToMemberList(){
    this.router.navigate(['/admin']);
  }
}
