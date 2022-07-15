import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { DatosPersonalesComponent } from './componentes/datos-personales/datos-personales.component';
import { AboutComponent } from './componentes/about/about.component';
import { ExpLaboralComponent } from './componentes/exp-laboral/exp-laboral.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { IdiomasComponent } from './componentes/idiomas/idiomas.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DatosPersonalesComponent,
    AboutComponent,
    ExpLaboralComponent,
    EducacionComponent,
    SkillsComponent,
    IdiomasComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent,
    IniciarSesionComponent,
    PortfolioComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
