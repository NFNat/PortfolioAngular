import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicio/proyectos.service';
import { TokenService } from 'src/app/servicio/token.service';




@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyectos[] = [];


  constructor(private proyectoServ: ProyectosService, private tokenService: TokenService) { }
  isLogged = false;


  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    }

    cargarProyecto(): void{
      this.proyectoServ.lista().subscribe(
        data => {this.proyectos = data;})
    }

    delete(id?:number){

      if(confirm("Desea eliminar?")==true){


      if(id!=undefined){
       
        this.proyectoServ.delete(id).subscribe(
          data => {
            this.cargarProyecto();
          }, err => {
            alert("No se pudo borrar el proyecto")
          }
        )

    }
  }else{
    alert("cancelado")
    } 
}
}