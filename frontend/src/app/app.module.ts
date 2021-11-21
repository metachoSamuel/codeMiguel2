import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Librería para poder consumir el servicio

import { HttpModule, } from '@angular/http';


import { HttpClientModule, } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './appcomponent/app.component';
import { ServicioService } from './services/servicio.service';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CarreraComponent } from './pages/carrera/carrera.component';
import { AsistenciaComponent } from './pages/asistencia/asistencia.component';
import { PrestamoComponent } from './pages/prestamo/prestamo.component';
import { PersonaComponent } from './pages/persona/persona.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MateriaComponent } from './pages/materia/materia.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CarreraComponent,
    AsistenciaComponent,
    PrestamoComponent,
    PersonaComponent,
    NavbarComponent,
    FooterComponent,
    MateriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
