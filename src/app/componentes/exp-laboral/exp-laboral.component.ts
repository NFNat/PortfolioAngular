import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ServExperienciaService } from 'src/app/servicio/serv-experiencia.service';
import { TokenService } from 'src/app/servicio/token.service';
//import { PortifolioService } from 'src/app/servicio/portifolio.service';

@Component({
  selector: 'app-exp-laboral',
  templateUrl: './exp-laboral.component.html',
  styleUrls: ['./exp-laboral.component.scss']
})
export class ExpLaboralComponent implements OnInit {
  //experienciaList:any;
expe: Experiencia[] =[];


  constructor(private servExperiencia: ServExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    } else {
      this.isLogged = false;
    }

  }

  cargarExperiencia():void{
    this.servExperiencia.lista().subscribe(data => {this.expe = data;})
  }
   
  delete(id?: number){
    if(id!= undefined){
      this.servExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo eliminar la experiencia")
        }
      )
    }

  }
 // constructor(private datosPortifolio:PortifolioService) { }

  /*ngOnInit(): void {
    this.datosPortifolio.obtenerDatos().subscribe(data=>{
      this.experienciaList=data.experience;
    });
  }*/

}

