import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { About } from 'src/app/model/about';
import { AboutService } from 'src/app/servicio/about.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.scss']
})
export class EditAboutComponent implements OnInit {

  about: About = null;

  constructor(
    private servAbout: AboutService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['id'];
    this.servAbout.detail(id).subscribe(
      data => {
        this.about=data;
      }, err =>{
        alert("error al modificarl");
        this.router.navigate(['']);
      }
    )
  }


  
onUpdate(): void{
  const id = this.activatedRouter.snapshot.params['id'];
  this.servAbout.update(id, this.about).subscribe(
  data => {
    this.router.navigate(['']);
  }
  )

}
}