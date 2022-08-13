import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ServExperienciaService } from 'src/app/servicio/serv-experiencia.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.scss']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  positionE: string = '';
  modoE: string = '';
  startE: string = '';
  endE: string = '';
  webE: string = '';
  imgE: string = '';

  constructor(
    private servExperiencia: ServExperienciaService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
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

    } else {
      alert("No autorizado")
      this.router.navigate(['portfolio']);
    }
  }

  onCreate(): void {
    const expe = new Experiencia(
      this.nombreE, 
      this.descripcionE, 
      this.positionE, 
      this.modoE, 
      this.startE, 
      this.endE, 
      this.webE, 
      this.imgE
      );
    this.servExperiencia.save(expe).subscribe(data => {
      alert("experiencia añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    }
    )
  }

  volver(): void {
    this.router.navigate(['portfolio'])
  }
}
