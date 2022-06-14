import { Component, OnInit } from '@angular/core';
import { PortifolioService } from 'src/app/servicio/portifolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {
  educacionList:any;

  constructor(private datosPortifolio:PortifolioService) { }

  ngOnInit(): void {
    this.datosPortifolio.obtenerDatos().subscribe(data =>{
      this.educacionList=data.education;
    });
  }

}
