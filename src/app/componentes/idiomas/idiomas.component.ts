import { Component, OnInit, Input } from '@angular/core';
import { PortifolioService } from 'src/app/servicio/portifolio.service';


@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.scss']
})
export class IdiomasComponent implements OnInit {
  @Input() porc:any;
  lenguasList:any;

  constructor(private datosPortifolio:PortifolioService) { }

  ngOnInit(): void {
    this.datosPortifolio.obtenerDatos().subscribe(data=>{
      this.lenguasList=data.idiomas;
    });
  }

}
