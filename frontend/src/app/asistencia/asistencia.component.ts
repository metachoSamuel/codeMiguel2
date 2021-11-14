import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ServicioService } from '../servicio.service';


@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {
  
  Asistencias: any = [];  //listar asistencias
  
  TituloAsistencias = "";
  TablaAsistencia: any = [];

  TituloAsistencia = "";              //Titulo de carrera buscada
  MiAsistencia: any = [];             //Carrera buscada
  TabBusAsistencia: any = [];        //Encabezados tabla carrera buscada 
  comboListaAsistencia: any = [];


  title = "Manejo Asistencias";
  controlLista = 1;
  BuscarEvalor = 1;

  //form group
  ListaAsistencias = new FormGroup({});

  filtrarAsistencia = new FormGroup({
    combofiltro: new FormControl()
  });

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router
  ) { }
  
  
  //Consultar asistencia
  public consultarAsistencia(op: any) {
    
    if (this.controlLista == 1) {
      this.servi.getAsistencia().subscribe((data: any) => {
        if (op == 1) {
          let dat = data;
          this.Asistencias = data;
          this.TituloAsistencia = 'LISTA TIPO DE DOCUMENTOS';
          this.TablaAsistencia[0] = 'xd';
          this.TablaAsistencia[1] = 'Nombre';
          
        } else if (op == 2) {
          this.comboListaAsistencia = data;
          this.MiAsistencia = null;
          this.TituloAsistencia = "";
          this.TabBusAsistencia[0] = "";
          this.TabBusAsistencia[1] = "";
          

        } else if (op == 3) {

        }
      }, error => { console.error(error + " ") });
    } else {
      this.Asistencias = null;
      this.TituloAsistencias = "";
      this.TablaAsistencia[0] = "";
      this.TablaAsistencia[1] = "";
      this.controlLista = 1;
      
    }
    this.servi.getAsistencia().subscribe((data: any) => {
      this.Asistencias = data;
      this.TituloAsistencia = "Listar Asistencias"
      this.TablaAsistencia[0] = "indicador";
      this.TablaAsistencia[1] = "fecha";
      this.TablaAsistencia[2] = "estado";
      this.TablaAsistencia[3] = "observaciones";
      this.TablaAsistencia[4] = "Estudiante";
      this.TablaAsistencia[5] = "Materia";
    }, error => { console.error(error + " ") });
  }


  ngOnInit(): void {
  }

}
