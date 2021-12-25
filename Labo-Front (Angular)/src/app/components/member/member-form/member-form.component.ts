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

  form:FormGroup;
  item1:any;

  constructor(private memberService : MembreService , private router : Router , private activatedRoute: ActivatedRoute) { }

  currentId : any ;
  ngOnInit(): void {
    // this.currentId = this.activatedRoute.snapshot.params.id;
    // if(!! this.currentId) //je suis dans edit //
    // {
    //   // this.memberService.getMemberById(this.currentId).then
    //   // ((item) => {this.item1=item ; 
    //   // this.initForm(this.item1)})
    //   // // getElementById  () dans service //
    // }
    // else // je suis dans create //
    // {
    //   this.initForm(this.item1);
    // } 
  }

  // initForm(item : Membre):void {
  //   this.form=new FormGroup({
  //     cin :  new FormControl(item?.cin , [Validators.required ]),
  //     name : new FormControl(item?.name , [Validators.required ]),
  //     cv :   new FormControl(item?.cv, [Validators.required ]),
  //     type : new FormControl(item?.type, [Validators.required ])
  //   })
  // }
    
  onSubmit() : void{
    console.log(this.form.value);
    const memberToSave = this.form.value;
    //this.memberService.saveMember(memberToSave).then( () => {this.router.navigate(['members'])} );
  }

}
