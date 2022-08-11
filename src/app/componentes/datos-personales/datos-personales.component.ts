import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicio/persona.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.scss']
})
export class DatosPersonalesComponent implements OnInit {
  
persona: Persona = new Persona("","","","","","","");
// persona: Persona[] = [];

constructor(public personaService: PersonaService, private tokenService: TokenService){ }
isLogged = false;

  ngOnInit(): void {
    
    this.cargarPersona()
    if(this.tokenService.getToken()){
      this.isLogged= true;
    } else {
      this.isLogged = false;
    }


    //this.personaService.getPersona().subscribe
    //(data => {this.persona = data})

  };

  cargarPersona():void{
    this.personaService.getPersona().subscribe(
      data=> {this.persona=data;})
  }


  delete(id?:number){
    if(confirm("Desea eliminar?")==true){


    if(id!= undefined){
     
      this.personaService.delete(id).subscribe(
        data => {
          this.cargarPersona();
        }, err => {
          alert("No se pudo eliminar")
        }
      )
    }
  }else{
    alert("cancelado")
    }      
}



}

