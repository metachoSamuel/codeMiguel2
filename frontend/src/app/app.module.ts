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
  }
]

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CarreraComponent,
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
