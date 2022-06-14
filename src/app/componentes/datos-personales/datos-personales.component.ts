import { Component, OnInit } from '@angular/core';
import { PortifolioService } from 'src/app/servicio/portifolio.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.scss']
})
export class DatosPersonalesComponent implements OnInit {
  miPortifolio:any;

  constructor(private datosPortifolio:PortifolioService) { }

  ngOnInit(): void {
    this.datosPortifolio.obtenerDatos().subscribe(data =>{console.log(data);
      this.miPortifolio=data;
    });
    
  }


}
