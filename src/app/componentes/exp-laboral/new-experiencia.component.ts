import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ServExperienciaService } from 'src/app/servicio/serv-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.scss']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string ='';
  descripcionE: string = '';

  constructor(private servExperiencia: ServExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate():void{
    const expe = new Experiencia(this.nombreE, this.descripcionE);
    this.servExperiencia.save(expe).subscribe(data =>{
      alert("experiencia añadidad");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    }
    )
  }

}
