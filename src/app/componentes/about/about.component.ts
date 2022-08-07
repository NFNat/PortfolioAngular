import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/model/about';
import { persona } from 'src/app/model/persona.model';
import { AboutService } from 'src/app/servicio/about.service';
//import { PortifolioService } from 'src/app/servicio/portifolio.service';
//import { PersonaService } from 'src/app/servicio/persona.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about: About[] = []; 
 // persona: persona = new persona("","","","","","","");
 

constructor(private aboutServ: AboutService, private tokenService: TokenService){ }
isLogged = false;

  ngOnInit(): void {

    this.cargarAbout();

    if(this.tokenService.getToken()){
      this.isLogged= true;
    } else {
      this.isLogged = false;
    }

    //this.personaService.getPersona().subscribe(data => {this.persona = data})
  };
  cargarAbout():void{
    this.aboutServ.lista().subscribe(
      data => {this.about=data;})
  }
  delete(id?:number){
    if(id!= undefined){
      alert("Seguro de borrar?"); // ver de poner un boton que sea cancelar
      this.aboutServ.delete(id).subscribe(
        data => {
          this.cargarAbout();
        }, err => {
          alert("No se pudo eliminar")
        }
      )
    }
  }






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
