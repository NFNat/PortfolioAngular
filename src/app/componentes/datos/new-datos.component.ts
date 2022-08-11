import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Datos } from 'src/app/model/datos';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-new-datos',
  templateUrl: './new-datos.component.html',
  styleUrls: ['./new-datos.component.scss']
})
export class NewDatosComponent implements OnInit {

  nombre: string = "";
  ocupacion: string ="";
  nivel: string = "";
  lugar: string ="";
  imagen: string="";



  constructor( private datosServ: DatosService, private router: Router) { }

  ngOnInit(): void {
  }


  onCreate():void{
    const datos = new Datos(this.nombre, this.ocupacion, this.nivel, this.lugar, this.imagen);
    this.datosServ.save(datos).subscribe(data =>{
      alert("Datos agregados");
      this.router.navigate(['']);
    },err =>{
    alert("falló");
    this.router.navigate(['']);
    }  
    )
  }


}
