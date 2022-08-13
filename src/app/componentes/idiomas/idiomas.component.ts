import { Component, OnInit, Input } from '@angular/core';
import { Idiomas } from 'src/app/model/idiomas';
import { IdiomasService } from 'src/app/servicio/idiomas.service';
import { TokenService } from 'src/app/servicio/token.service';


@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.scss']
})
export class IdiomasComponent implements OnInit {

  idiomas: Idiomas[] = [];
  constructor(
    private idiomasServ: IdiomasService, 
    private tokenService: TokenService
    ) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarIdioma();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarIdioma(): void {
    this.idiomasServ.lista().subscribe(
      data => { this.idiomas = data; })
  }

  delete(id?: number) {
    if (confirm("Desea eliminar?") == true) {
      if (id != undefined) {
        this.idiomasServ.delete(id).subscribe(
          data => {
            this.cargarIdioma();
          }, err => {
            alert("no se pudo eliminar el idioma")
          }
        )
      }
    } else {
      alert("cancelado")
    }
  }
}
