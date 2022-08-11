import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Datos } from 'src/app/model/datos';
import { DatosService } from 'src/app/servicio/datos.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-edit-datos',
  templateUrl: './edit-datos.component.html',
  styleUrls: ['./edit-datos.component.scss']
})
export class EditDatosComponent implements OnInit {


  datos: Datos = null;

  constructor(
    private datosServ: DatosService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService
  ) { }

  isLogged = false;


  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    if (this.isLogged) {

      this.datosServ.detail(id).subscribe(
        data => {
          this.datos = data;
        }, err => {
          alert("error al modificar");
          this.router.navigate(['']);
        }
      )
    } else {
      alert("No autorizado")
      this.router.navigate(['portfolio']);

    }
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.datosServ.update(id, this.datos).subscribe(
    data => {
      this.router.navigate(['']);
    },err =>{
      alert("error al modificar");
      this.router.navigate(['']);
    }
    )
  }

}
