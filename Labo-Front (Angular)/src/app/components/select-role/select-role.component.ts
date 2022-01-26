import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-role',
  templateUrl: './select-role.component.html',
  styleUrls: ['./select-role.component.css']
})
export class SelectRoleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  admin(){
    this.router.navigate(['admin']);
  }
  visitor(){
    this.router.navigate(['visiteur']);
  }
  member(){
    this.router.navigate(['membre-home']);
  }
  

}
