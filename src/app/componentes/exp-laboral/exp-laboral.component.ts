import { Component, OnInit } from '@angular/core';
import { PortifolioService } from 'src/app/servicio/portifolio.service';

@Component({
  selector: 'app-exp-laboral',
  templateUrl: './exp-laboral.component.html',
  styleUrls: ['./exp-laboral.component.scss']
})
export class ExpLaboralComponent implements OnInit {
  experienciaList:any;

  constructor(private datosPortifolio:PortifolioService) { }

  ngOnInit(): void {
    this.datosPortifolio.obtenerDatos().subscribe(data=>{
      this.experienciaList=data.experience;
    });
  }

}
