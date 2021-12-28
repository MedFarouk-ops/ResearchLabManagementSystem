import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Outil } from 'src/app/models/outil';
import { OutilService } from 'src/app/_services/outil.service';

@Component({
  selector: 'app-edit-outil',
  templateUrl: './edit-outil.component.html',
  styleUrls: ['./edit-outil.component.css']
})
export class EditOutilComponent implements OnInit {

  id: any;
  outil: Outil = new Outil();
  constructor(private os: OutilService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.os.getOutilsById(this.id).subscribe(data => {
      this.outil = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.os.updateOutil(this.id, this.outil).subscribe( data =>{
      this.goToOutilList();
    }
    , (error:any) => console.log(error));
  }

  goToOutilList(){
    this.router.navigate(['/outils']);
  }

}
