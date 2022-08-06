import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditExperienciaComponent } from './componentes/exp-laboral/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/exp-laboral/new-experiencia.component';
import { EditIdiomasComponent } from './componentes/idiomas/edit-idiomas.component';
import { NewIdiomasComponent } from './componentes/idiomas/new-idiomas.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';
import { EditSkillsComponent } from './componentes/skills/edit-skills.component';
import { NewSkillsComponent } from './componentes/skills/new-skills.component';


const routes: Routes = [
  { path:'portfolio', component:PortfolioComponent },
  { path:'login', component:IniciarSesionComponent },
  { path:'', redirectTo:'portfolio', pathMatch:'full' },
  { path: 'nuevaexp', component:NewExperienciaComponent },
  { path: 'editexp/:id', component:EditExperienciaComponent },
  { path: 'nuevaedu', component:NewEducacionComponent },
  { path: 'editedu/:id', component:EditEducacionComponent },
  { path: 'nuevaskill', component: NewSkillsComponent },
  { path: 'editskill/:id', component:EditSkillsComponent },
  { path:'nuevoidi', component: NewIdiomasComponent },
  { path: 'editidi/:id' , component:EditIdiomasComponent },
  { path: 'nuevoproyecto', component: NewProyectoComponent },
  { path: 'editproyecto/:id', component: EditProyectoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
