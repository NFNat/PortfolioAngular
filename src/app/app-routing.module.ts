import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './componentes/exp-laboral/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/exp-laboral/new-experiencia.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent},
  {path:'login', component:IniciarSesionComponent},
  {path:'', redirectTo:'portfolio', pathMatch:'full'},
  {path: 'nuevaexp', component:NewExperienciaComponent},
  {path: 'editexp/:id', component:EditExperienciaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
