import { Component, OnInit } from '@angular/core';
import { PortifolioService } from 'src/app/servicio/portifolio.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private datosPortfolio:PortifolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos();
  }

}
