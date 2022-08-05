import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicio/skills.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {


  skills: Skills[] = [];
  

  constructor(private skillsServ: SkillsService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkill();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkill():void{
    this.skillsServ.lista().subscribe(
      data => {this.skills = data;})
  }

  delete(id?:number){
    if(id!=undefined){
      alert("Seguro de borrar esta Skill?"); // Agregar boton de cancelar
      this.skillsServ.delete(id).subscribe(
        data => {
          this.cargarSkill();
        }, err => {
          alert("No se pudo borrar la Skill")
        }
      )
    }

  }
}
