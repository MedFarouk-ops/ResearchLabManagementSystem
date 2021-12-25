import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Membre } from 'src/app/models/membre';
import { MembreService } from 'src/app/_services/membre.service';

@Component({
  selector: 'app-admin-index',
  templateUrl: './admin-index.component.html',
  styleUrls: ['./admin-index.component.css']
})
export class AdminIndexComponent implements OnInit {

  // dataSource : MatTableDataSource<Membre>;   

  constructor(private ms:MembreService , private router : Router ) {
    // this.dataSource = new MatTableDataSource(this.ms.tab);
  }

  ngOnInit(): void {
  }

}
