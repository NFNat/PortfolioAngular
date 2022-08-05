import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicio/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.scss']
})
export class NewEducacionComponent implements OnInit {
    schoolEd: string ="";
    titleEd: string ="";
    careerEd: string ="";
    startEd: string ="";
    endEd: string ="";
    webEd: string ="";
    imgEd: string = "";

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }


  onCreate():void{
    const educacion = new Educacion(this.schoolEd, this.titleEd, this.careerEd, this.startEd, this.endEd, this.webEd,this.imgEd);
    this.educacionS.save(educacion).subscribe(data =>{
      alert("Educacion  añadida");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    }
    )
  }

}
