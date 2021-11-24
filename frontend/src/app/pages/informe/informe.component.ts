import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AsistenciaService } from 'src/app/services/asistencia.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css']
})
export class InformeComponent implements OnInit {

  listaPersonas: any;

  dataInforme: any = [];

  TituloAsistencias = "";
  TablaAsistencia: any = [];

  controlLista = 1;
  BuscarEvalor = 1;

  //Control formularios
  mostrarCrear: boolean = false;
  mostrarListar: boolean = false;

  //Form Group
  formularioInforme = new FormGroup({
    id: new FormControl('', Validators.required),
    fechaInicio: new FormControl(''),
    fechaFin: new FormControl('')
  })

  formularioListar = new FormGroup({

  })

  constructor(
    private servi: AsistenciaService,
    private serviPersona: PersonaService
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
      if (this.mostrarListar) {
        this.mostrarListar = false;
      } else {
        this.mostrarListar = true;
      }
    }
  }

  public verInforme() {
    if (this.controlLista == 1) {

      this.servi.postInformeAsistencia(this.formularioInforme.value).subscribe(
        (data: any) => {
          this.dataInforme = data
          console.log(this.dataInforme)
          this.TituloAsistencias = "Informe chingon"
          this.TablaAsistencia[0] = "indicador";
          this.TablaAsistencia[1] = "fecha";
          this.TablaAsistencia[2] = "observaciones";
          this.TablaAsistencia[3] = "Estudiante";
          this.TablaAsistencia[4] = "Materia";
          this.TablaAsistencia[5] = "Carrera";
        }, error => { }
      )
    } else {
      this.dataInforme = null;
      this.TablaAsistencia[0] = "";
      this.TablaAsistencia[1] = "";
      this.TablaAsistencia[2] = "";
      this.TablaAsistencia[3] = "";
      this.TablaAsistencia[4] = "";
      this.TablaAsistencia[5] = "";
      this.controlLista = 1;
    }
  }



  public obtenerPersona() {
    this.serviPersona.getPersonas().subscribe((data: any) => {
      this.listaPersonas = data;
      //console.log(this.listaPersonas)
    }, error => { console.error(error + "") })
  }

  public limpiarLista() {
    this.controlLista = 0;
  }

  ngOnInit(): void {
  }

}
