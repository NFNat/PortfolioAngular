import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicio/educacion.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.scss']
})
export class EditEducacionComponent implements OnInit {
  educacion: Educacion = null;

  constructor(
    private educacionS: EducacionService, 
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




    this.educacionS.detail(id).subscribe(
      data => {
        this.educacion=data;
      }, err =>{
      alert("error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }else {
    alert("No autorizado")
    this.router.navigate(['portfolio']);

  }

}

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.update(id, this.educacion).subscribe(
      data=>{
        this.router.navigate(['']);
      }, err =>{
        alert("error al modificar la educacion");
        this.router.navigate(['']);
      }
    )

  }



}


