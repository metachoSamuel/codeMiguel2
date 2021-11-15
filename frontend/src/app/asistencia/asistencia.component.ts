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

  public consultarAsistencia(op: any) {
    if (this.controlLista == 1) {
      this.servi.getAsistencias().subscribe((data: any) => {
        if (op == 1) {
          this.Asistencias = data;
          this.TituloAsistencia = "Listar Asistencias"
          this.TablaAsistencia[0] = "indicador";
          this.TablaAsistencia[1] = "fecha";
          this.TablaAsistencia[2] = "estado";
          this.TablaAsistencia[3] = "observaciones";
          this.TablaAsistencia[4] = "Estudiante";
          this.TablaAsistencia[5] = "Materia";
        } else if (op == 2) {
          this.comboListaAsistencia = data;
          this.MiAsistencia = null;
          this.TituloAsistencia = "";
          this.TablaAsistencia[0] = "";
          this.TablaAsistencia[1] = "";
          this.TablaAsistencia[2] = "";
          this.TablaAsistencia[3] = "";
          this.TablaAsistencia[4] = "";
          this.TablaAsistencia[5] = "";
          this.TablaAsistencia[0] = "su puta madre";
        }
      }, error => { console.error(error + " ") })
    } else {
      this.Asistencias = null;
      this.TituloAsistencia = ""
      this.TablaAsistencia[0] = "";
      this.TablaAsistencia[1] = "";
      this.TablaAsistencia[2] = "";
      this.TablaAsistencia[3] = "";
      this.TablaAsistencia[4] = "";
      this.TablaAsistencia[5] = "";
      this.controlLista = 1;
    }
  }

  //Consultar asistencia
  /* public consultarAsistencia(op: any) {
     
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
 */
  public LimpiarLista() {
    this.controlLista = 0;
  }

  public buscarAsistencia() {
    var filtrovalor = this.filtrarAsistencia.getRawValue()['combofiltro'];
    if (this.controlLista == 1) {
      this.servi.getAsistencia('/' + filtrovalor).subscribe((data: {}) => {
        this.MiAsistencia = data;
        this.TituloAsistencia = "Asistencia seleccionada";
        this.TabBusAsistencia[0] = "indicador";
        this.TabBusAsistencia[1] = "fecha";
        this.TabBusAsistencia[2] = "estado";
        this.TabBusAsistencia[3] = "observaciones";
        this.TabBusAsistencia[4] = "estudiante";
        this.TabBusAsistencia[5] = "Materia";
      }, error => { console.log(error) });
    } else {
      this.MiAsistencia = null;
      this.TituloAsistencia = "";
      this.TabBusAsistencia[0] = "";
      this.TabBusAsistencia[1] = "";
      this.TabBusAsistencia[2] = "";
      this.TabBusAsistencia[3] = "";
      this.TabBusAsistencia[4] = "";
      this.TabBusAsistencia[5] = "";
      this.controlLista=1;
    }

  }

  ngOnInit(): void {
  }

}
