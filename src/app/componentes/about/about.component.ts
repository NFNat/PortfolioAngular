import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
//import { PortifolioService } from 'src/app/servicio/portifolio.service';
import { PersonaService } from 'src/app/servicio/persona.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
 
  persona: persona = new persona("","","","","","","");
 

constructor(public personaService: PersonaService){ }
  

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})

  };
  






  //  miPortifolio:any;
  //  about:any=false;
  // constructor(private datosPortifolio:PortifolioService) { }

  // ngOnInit(): void {this.datosPortifolio.obtenerDatos().subscribe(data =>{this.miPortifolio=data;
  // });
   
  // }

  // editAbout() {
  //   console.log("editando el about");
  //  this.about=true;

  // }
}
