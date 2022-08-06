import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicio/proyectos.service';

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
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyetoServ.detail(id).subscribe(
      data => {
        this.proyectos = data;
      }, err => {
        alert("error al modificar este proyecto");
        this.router.navigate(['']);
      }
    )
  }
onUpdate(): void{
  const id = this.activatedRouter.snapshot.params['id'];
  this.proyetoServ.update(id, this.proyectos).subscribe(
    data => {
      this.router.navigate(['']);
    }
  )
}
}
