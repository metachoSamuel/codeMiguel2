import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AsistenciaService } from 'src/app/services/asistencia.service';
import { PersonaService } from 'src/app/services/persona.service';

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

  //Control formularios
  mostrarCrear: boolean = false;
  mostrarActualizar: boolean = false;

  //form group
  ListaAsistencias = new FormGroup({});

  filtrarAsistencia = new FormGroup({
    combofiltro: new FormControl()
  });

  formularioCrear = new FormGroup({
    //fecha: new FormControl(new Date().getDate, Validators.required, ),
    observaciones: new FormControl('', Validators.required),
    id_persona: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required),
    id_materia: new FormControl('', Validators.required)
  });
  
  formularioActualizar = new FormGroup({
    id_asistencia: new FormControl('', Validators.required),
    fecha: new FormControl(''),
    observaciones: new FormControl(''),
    id_persona: new FormControl('' ),
    estado: new FormControl(''),
    id_materia: new FormControl('')
  });

  constructor(
    private formBuilder: FormBuilder,
    private servi: AsistenciaService,
    Router: Router
  ) { }

  //Funcion para mostrar elementos en el html
  public mostrarHtml(op: any) {
    if (op == 1) {
      if (this.mostrarCrear) {
        this.mostrarCrear = false;
      } else {
        this.mostrarCrear = true;
      }
    } else {
      if (this.mostrarActualizar) {
        this.mostrarActualizar = false;
      } else {
        this.mostrarActualizar = true;
      }
    }
  }

  /**-----------CRUL---------------------------------- */
  //Crear
  public crearAsistencia() {
    var dataAsistencia = this.formularioCrear.value;
    this.servi.postAsistencia(dataAsistencia);
  }

  //Leer
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

  //Actualizar
  public actualizarAsistencia() {
    var dataAsistencia = this.formularioActualizar.value;
    this.servi.updateAsistencia(dataAsistencia);
  }
  
  //Listar
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


  public LimpiarLista() {
    this.controlLista = 0;
  }


  ngOnInit(): void {
  }

}
