import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicio/educacion.service';
import { TokenService } from 'src/app/servicio/token.service';
//import { PortifolioService } from 'src/app/servicio/portifolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {
 // educacionList:any;

 educacion: Educacion[] =[];
 



 constructor(private educacionS: EducacionService, private tokenService: TokenService) { }
 isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();

    if(this.tokenService.getToken()){
      this.isLogged= true;
    } else {
      this.isLogged = false;
    }
  }


  cargarEducacion():void{
    this.educacionS.lista().subscribe(
      data => {this.educacion = data;})
  }
   
  delete(id?: number){
    if(id!= undefined){
      alert("Seguro de borrar esta educacion?"); // ver de poner un boton que sea cancelar
      this.educacionS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar la educacion")
        }
      )
    }

  }



  // constructor(private datosPortifolio:PortifolioService) { }

  // ngOnInit(): void {
  //   this.datosPortifolio.obtenerDatos().subscribe(data =>{
  //     this.educacionList=data.education;
  //   });
  // }

}
