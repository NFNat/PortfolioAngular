import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicio/skills.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.scss']
})
export class EditSkillsComponent implements OnInit {

  skills: Skills = null;

  constructor(
    private skillsS: SkillsService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillsS.detail(id).subscribe(
      data => {
        this.skills=data;
      }, err =>{
        alert("error al modificar esta Skill");
        this.router.navigate(['']);
      }
    )
  }

onUpdate(): void{
  const id = this.activatedRouter.snapshot.params['id'];
  this.skillsS.update(id, this.skills).subscribe(
  data => {
    this.router.navigate(['']);
  }
  )
}




}
