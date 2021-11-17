import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsistenciaComponent } from './pages/asistencia/asistencia.component';
import { CarreraComponent } from './pages/carrera/carrera.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PersonaComponent } from './pages/persona/persona.component';
import { PrestamoComponent } from './pages/prestamo/prestamo.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent,},
  {path: 'carrera', component: CarreraComponent,},
  {path: 'asistencia', component: AsistenciaComponent,},
  {path: 'prestamo', component: PrestamoComponent,},
  {path: 'persona', component: PersonaComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
