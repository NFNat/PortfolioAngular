import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Idiomas } from 'src/app/model/idiomas';
import { IdiomasService } from 'src/app/servicio/idiomas.service';

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
    private router: Router    
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.idiomasServ.detail(id).subscribe(
      data=> {
        this.idiomas=data;
      }, err =>{
        alert("error al modificar el idioma");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.idiomasServ.update(id, this.idiomas).subscribe(
      data => {
        this.router.navigate(['']);
      }
    )
  }

}
