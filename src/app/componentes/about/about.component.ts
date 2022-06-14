import { Component, OnInit } from '@angular/core';
import { PortifolioService } from 'src/app/servicio/portifolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  miPortifolio:any;
  about:any=false;
  constructor(private datosPortifolio:PortifolioService) { }

  ngOnInit(): void {this.datosPortifolio.obtenerDatos().subscribe(data =>{this.miPortifolio=data;
  });
  
 

    
  }


  editAbout() {
    console.log("editando el about");
   this.about=true;

  }
}
