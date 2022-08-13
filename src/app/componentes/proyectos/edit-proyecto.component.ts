import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicio/proyectos.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.scss']
})
export class EditProyectoComponent implements OnInit {

  proyectos: Proyectos = null;

  constructor(
    private proyetoServ: ProyectosService,
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
      this.proyetoServ.detail(id).subscribe(
        data => {
          this.proyectos = data;
        }, err => {
          alert("error al modificar este proyecto");
          this.router.navigate(['']);
        }
      )
    } else {
      alert("No autorizado")
      this.router.navigate(['portfolio']);
    }
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyetoServ.update(id, this.proyectos).subscribe(
      data => {
        this.router.navigate(['']);
      }
    )
  }
  volver(): void {
    this.router.navigate(['portfolio'])
  }
}
