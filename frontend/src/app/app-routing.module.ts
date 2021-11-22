import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsistenciaComponent } from './pages/asistencia/asistencia.component';
import { AudioVisualComponent } from './pages/audio-visual/audio-visual.component'
import { CarreraComponent } from './pages/carrera/carrera.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MateriaComponent } from './pages/materia/materia.component';
import { PersonaComponent } from './pages/persona/persona.component';
import { PrestamoComponent } from './pages/prestamo/prestamo.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent,},
  {path: 'carrera', component: CarreraComponent,},
  {path: 'asistencia', component: AsistenciaComponent,},
  {path: 'prestamo', component: PrestamoComponent,},
  {path: 'persona', component: PersonaComponent,},
  {path: 'materia', component: MateriaComponent, },
  {path: 'audiovisual', component: AudioVisualComponent,},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
