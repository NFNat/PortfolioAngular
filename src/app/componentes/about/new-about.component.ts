import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { About } from 'src/app/model/about';
import { AboutService } from 'src/app/servicio/about.service';

@Component({
  selector: 'app-new-about',
  templateUrl: './new-about.component.html',
  styleUrls: ['./new-about.component.scss']
})
export class NewAboutComponent implements OnInit {
  about:string="";

  constructor(private servAbout: AboutService, private router: Router) { }

  ngOnInit(): void {
  }



  onCreate():void{
    const about = new About(this.about);
    this.servAbout.save(about).subscribe(data =>{
      alert("Agregado con éxito");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    }
    )
  }

  

}
