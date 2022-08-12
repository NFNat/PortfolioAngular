import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ServExperienciaService } from 'src/app/servicio/serv-experiencia.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.scss']
})
export class EditExperienciaComponent implements OnInit {
  expLab : Experiencia = null;


  constructor(
    private servExperiencia: ServExperienciaService, 
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


    this.servExperiencia.detail(id).subscribe(
      data => {
        this.expLab=data;
      }, err =>{
      alert("error al modificar la experiencia");
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
    this.servExperiencia.update(id, this.expLab).subscribe(
      data=>{
        this.router.navigate(['']);
      }, err =>{
        alert("error al modificar la experien");
        this.router.navigate(['']);
      }
    )

  }

  volver():void{
    this.router.navigate(['portfolio'])

  }

}


