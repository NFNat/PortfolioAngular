import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { About } from 'src/app/model/about';
import { AboutService } from 'src/app/servicio/about.service';
import { TokenService } from 'src/app/servicio/token.service';

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
    private router: Router, 
    private tokenService: TokenService
  ) { }

  isLogged = false;

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    
    if (this.isLogged) {
      this.servAbout.detail(id).subscribe(
        data => {
          this.about = data;
        }, err => {
          alert("error al modificarl");
          this.router.navigate(['']);
        }
      )
    } else {
      alert("No autorizado")
      this.router.navigate(['portfolio']);
    }

  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.servAbout.update(id, this.about).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  volver(): void {
    this.router.navigate(['portfolio'])
  }
}