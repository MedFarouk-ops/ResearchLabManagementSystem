import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publication } from 'src/app/models/publication';
import { PublicationService } from 'src/app/_services/publication.service';

@Component({
  selector: 'app-edit-pub',
  templateUrl: './edit-pub.component.html',
  styleUrls: ['./edit-pub.component.css']
})
export class EditPubComponent implements OnInit {


  id: any;
  pub: Publication = new Publication();
  constructor(private ps: PublicationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.ps.getPublicationById(this.id).subscribe(data => {
      this.pub = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.ps.updatePublication(this.id, this.pub).subscribe( data =>{
      this.goToPubList();
    }
    , (error:any) => console.log(error));
  }

  goToPubList(){
    this.router.navigate(['/publication']);
  }
}
