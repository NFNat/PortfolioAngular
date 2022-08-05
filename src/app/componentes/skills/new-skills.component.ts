import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicio/skills.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.scss']
})
export class NewSkillsComponent implements OnInit {

    nameSkill: string = "";
    progress: number = 0;
    imgSkill: string = "";

  constructor(private skillsS: SkillsService, private router: Router) { }

  ngOnInit(): void {
  }



onCreate():void{
  const skills = new Skills(this.nameSkill, this.progress, this.imgSkill);
  this.skillsS.save(skills).subscribe(data =>{
    alert("Skill agregada");
    this.router.navigate(['']);
  },err =>{
  alert("falló");
  this.router.navigate(['']);
  }  
  )
}
}