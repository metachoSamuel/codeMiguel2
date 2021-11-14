import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Librería para poder consumir el servicio

import { HttpModule, } from '@angular/http';


import { HttpClientModule, } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './appcomponent/app.component';
import { ServicioService } from './servicio.service';
import { InicioComponent } from './inicio/inicio.component';
import { CarreraComponent } from './carrera/carrera.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { PrestamoComponent } from './prestamo/prestamo.component';

const appRoutes: Routes = 
[
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'Inicio'
  },
  {
    path: 'Inicio',
    component:InicioComponent,
  },
  {
    path: 'Carrera',
    component:CarreraComponent,
  },
  {
    path: 'Asistencia',
    component:AsistenciaComponent,
  },
  {
    path: 'Prestamo',
    component:PrestamoComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CarreraComponent,
    AsistenciaComponent,
    PrestamoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes), // se agregan estos 
    BrowserModule,
    HttpClientModule  // <- Agregar la clase
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
