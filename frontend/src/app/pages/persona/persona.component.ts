import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ServicioService } from '../../services/servicio.service';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  Personas: any = [];

  TituloPersonas = "";
  TablaPersona: any = [];

  TituloPersona = "";
  MiPersona: any = [];
  TabBusPersona: any = [];
  comboListaPersona: any = [];

  title = "Manejo Asistencias";
  controlLista = 1;
  buscarEvalor = 1;

  ListaPersonas = new FormGroup({});
  filtrarPersona = new FormGroup({
    combofiltro: new FormControl()
  });

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router
  ) { }

  //Listar Personas
  public consultarPersona(op: any) {
    if (this.controlLista == 1) {
      this.servi.getPersonas().subscribe((data: any) => {
        if (op == 1) {
          this.Personas = data;
          this.TituloPersonas = "Listar Personas";
          this.TablaPersona[0] = "Indicador";
          this.TablaPersona[1] = "Apellidos";
          this.TablaPersona[2] = "Nombres";
          this.TablaPersona[3] = "numero de documento";
          this.TablaPersona[4] = "Tipo de usuario";
        } else if (op == 2) {
          this.comboListaPersona = data;
          this.MiPersona = null;
          this.TituloPersonas = "";
          this.TablaPersona[0] = "";
          this.TablaPersona[1] = "";
          this.TablaPersona[2] = "";
          this.TablaPersona[3] = "";
          this.TablaPersona[4] = "";
        }
      }, error => { console.error(error + " ") })
    } else {
      this.Personas = null;
      this.TituloPersonas = "";
      this.TablaPersona[0] = "";
      this.TablaPersona[1] = "";
      this.TablaPersona[2] = "";
      this.TablaPersona[3] = "";
      this.TablaPersona[4] = "";
      this.controlLista = 1;
    }
  }

  //Leer Persona
  public buscarPersona() {
    var filtrovalor = this.filtrarPersona.getRawValue()['combofiltro'];
    if (this.controlLista == 1) {
      this.servi.getPersona('/' + filtrovalor).subscribe((data: {}) => {
        this.MiPersona = data;
        this.TituloPersona = "Persona Seleccionada";
        this.TabBusPersona[0] = "Indicador";
        this.TabBusPersona[1] = "Apellidos";
        this.TabBusPersona[2] = "Nombres";
        this.TabBusPersona[3] = "numero de documento";
        this.TabBusPersona[4] = "Tipo de usuario";

      }, error => { console.error(error + " ") });
    } else {
      this.MiPersona = null;
      this.TituloPersona = "";
      this.TabBusPersona[0] = "";
      this.TabBusPersona[1] = "";
      this.TabBusPersona[2] = "";
      this.TabBusPersona[3] = "";
      this.TabBusPersona[4] = "";
      this.controlLista = 1;
    }
  }

  public limpiarLista() {
    this.controlLista = 0;
  }
  

  ngOnInit(): void {
  }

}
