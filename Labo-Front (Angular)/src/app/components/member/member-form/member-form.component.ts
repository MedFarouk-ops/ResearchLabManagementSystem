import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MembreService } from 'src/app/_services/membre.service';
import { Membre } from 'src/app/models/membre';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {

  constructor(private memberService : MembreService , private router : Router , private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
  }

  addEtudiant(){
    this.router.navigate(['/etudiant']);
  }
  addEnseignant(){
    this.router.navigate(['/enseignant']);
  }


}
