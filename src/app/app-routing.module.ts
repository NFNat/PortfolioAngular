import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditExperienciaComponent } from './componentes/exp-laboral/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/exp-laboral/new-experiencia.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';

const routes: Routes = [
  { path:'portfolio', component:PortfolioComponent },
  { path:'login', component:IniciarSesionComponent },
  { path:'', redirectTo:'portfolio', pathMatch:'full' },
  { path: 'nuevaexp', component:NewExperienciaComponent },
  { path: 'editexp/:id', component:EditExperienciaComponent },
  { path: 'nuevaedu', component:NewEducacionComponent },
  { path: 'editedu/:id', component:EditEducacionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
