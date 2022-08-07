import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Idiomas } from 'src/app/model/idiomas';
import { IdiomasService } from 'src/app/servicio/idiomas.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-edit-idiomas',
  templateUrl: './edit-idiomas.component.html',
  styleUrls: ['./edit-idiomas.component.scss']
})
export class EditIdiomasComponent implements OnInit {

  idiomas: Idiomas = null;

  constructor(
    private idiomasServ: IdiomasService,
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




    this.idiomasServ.detail(id).subscribe(
      data=> {
        this.idiomas=data;
      }, err =>{
        alert("error al modificar el idioma");
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
    this.idiomasServ.update(id, this.idiomas).subscribe(
      data => {
        this.router.navigate(['']);
      },err =>{
        alert("error al modificar la experien");
        this.router.navigate(['']);
      }
    )
  }

}


