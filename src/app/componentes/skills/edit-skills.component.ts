import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicio/skills.service';
import { TokenService } from 'src/app/servicio/token.service';


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
      this.skillsS.detail(id).subscribe(
        data => {
          this.skills = data;
        }, err => {
          alert("error al modificar esta Skill");
          this.router.navigate(['']);
        }
      )
    } else {
      alert("No autorizado")
      this.router.navigate(['portfolio']);
    }
  }


  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillsS.update(id, this.skills).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("error al modificar esta skill");
        this.router.navigate(['']);
      }
    )
  }
  volver(): void {
    this.router.navigate(['portfolio'])
  }

}
