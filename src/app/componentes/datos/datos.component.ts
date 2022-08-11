import { Component, OnInit } from '@angular/core';
import { Datos } from 'src/app/model/datos';
import { DatosService } from 'src/app/servicio/datos.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {
  datos: Datos[] = [];

  constructor(private datosServ: DatosService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {


    this.cargarDatos();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    }

    cargarDatos(): void{
      this.datosServ.lista().subscribe(
        data => {this.datos = data;})
    }

    delete(id?:number){

      if(confirm("Desea eliminar?")==true){


      if(id!=undefined){
       
        this.datosServ.delete(id).subscribe(
          data => {
            this.cargarDatos();
          }, err => {
            alert("No se pudo borrar")
          }
        )

    }
  }else{
    alert("cancelado")
    } 



  }

}

