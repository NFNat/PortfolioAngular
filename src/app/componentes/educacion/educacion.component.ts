import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicio/educacion.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {

  educacion: Educacion[] = [];

  constructor(
    private educacionS: EducacionService, 
    private tokenService: TokenService
    ) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.educacionS.lista().subscribe(
      data => { this.educacion = data; })
  }

  delete(id?: number) {
    if (confirm("Desea eliminar?") == true) {
      if (id != undefined) {
        this.educacionS.delete(id).subscribe(
          data => {
            this.cargarEducacion();
          }, err => {
            alert("No se pudo eliminar la educacion")
          }
        )
      }
    } else {
      alert("cancelado")
    }
  }
}
