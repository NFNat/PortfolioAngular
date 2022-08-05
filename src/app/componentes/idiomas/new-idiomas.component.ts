import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Idiomas } from 'src/app/model/idiomas';
import { IdiomasService } from 'src/app/servicio/idiomas.service';

@Component({
  selector: 'app-new-idiomas',
  templateUrl: './new-idiomas.component.html',
  styleUrls: ['./new-idiomas.component.scss']
})
export class NewIdiomasComponent implements OnInit {

    idioma: string = "";
    nivel: string ="";
    progressId: number=0;

  constructor(private idiomasServ: IdiomasService, private router: Router) { }


  ngOnInit(): void {
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



}
