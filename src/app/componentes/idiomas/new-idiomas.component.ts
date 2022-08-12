import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Idiomas } from 'src/app/model/idiomas';
import { IdiomasService } from 'src/app/servicio/idiomas.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-new-idiomas',
  templateUrl: './new-idiomas.component.html',
  styleUrls: ['./new-idiomas.component.scss']
})
export class NewIdiomasComponent implements OnInit {

    idioma: string = "";
    nivel: string ="";
    progressId: number=0;

  constructor(
    private idiomasServ: IdiomasService, 
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
  onCreate():void{
    const idiomas = new Idiomas(this.idioma, this.nivel, this.progressId);
    this.idiomasServ.save(idiomas).subscribe(data =>{
      alert("Idioma agregado");
      this.router.navigate(['']);
    },err =>{
    alert("falló");
    this.router.navigate(['']);
    }  
    )
  }
  volver():void{
    this.router.navigate(['portfolio'])

  }



}
