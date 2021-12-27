import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembreService } from 'src/app/_services/membre.service';

@Component({
  selector: 'app-add-enseignant',
  templateUrl: './add-enseignant.component.html',
  styleUrls: ['./add-enseignant.component.css']
})
export class AddEnseignantComponent implements OnInit {

  constructor(private memberService :MembreService , private router: Router) {
  }

  ngOnInit(): void {
  }
  saveMembre(ens : any){
    this.memberService.saveMembreEns(ens).subscribe( data =>{
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
