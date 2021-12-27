import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/models/etudiant';
import { Membre } from 'src/app/models/membre';
import { MembreService } from 'src/app/_services/membre.service';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {

  constructor(private memberService :MembreService , private router: Router) {
  }

  ngOnInit(): void {
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
    this.saveMembre(data);
  }
}
