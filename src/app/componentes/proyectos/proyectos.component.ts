import { Component, OnInit } from '@angular/core';
import { PortifolioService } from 'src/app/servicio/portifolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  proyectosList:any;


  constructor(private datosPortifolio:PortifolioService) { }

  ngOnInit(): void {
    this.datosPortifolio.obtenerDatos().subscribe(data=>{
      this.proyectosList=data.projects;
    });
  }

}
