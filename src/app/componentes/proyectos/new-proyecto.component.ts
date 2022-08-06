import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicio/proyectos.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.scss']
})
export class NewProyectoComponent implements OnInit {

  id: number 
  nombreProy: string = "";
  descProy: string ="" ;
  webProy: string = "" ;

  constructor(private proyectoServ: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const proyectos = new Proyectos(this.nombreProy, this.descProy, this.webProy);
    this.proyectoServ.save(proyectos).subscribe(data =>{
      alert("Proyecto agregado");
      this.router.navigate(['']);
    },err =>{
    alert("falló");
    this.router.navigate(['']);
    }  
    )
}
}
