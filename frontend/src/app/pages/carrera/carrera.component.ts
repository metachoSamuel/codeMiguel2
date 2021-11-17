import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css']
})
export class CarreraComponent implements OnInit {
  Carreras: any = [];              //Lista carreras
  TituloCarreras = "";             //Titulo Lista de carreras
  TablaCarreras: any = [];        //Encabezados tabla Lista de carreras 

  TituloCarrera = "";              //Titulo de carrera buscada
  MiCarrera: any = [];             //Carrera buscada
  TabBusCarrera: any = [];        //Encabezados tabla carrera buscada 
  comboListaCarrera: any = [];     //Combo buscar carrera

  title = "Manejo Carreras";
  controlLista = 1;
  BuscarEvalor = 1;               //Control para carga del valor a buscar

  //Form group
  ListaCarreras = new FormGroup(
    {

    }
  );

  filtrarCarrera = new FormGroup(
    {
      combofiltro: new FormControl()
    }
  );

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router
  ) { }



  //Listar Personas
  public consultarCarrera(op: any) {
    if (this.controlLista == 1) {
      this.servi.getCarreras().subscribe((data: any) => {
        if (op == 1) {
          this.Carreras = data;
          this.TituloCarreras = "Listar Carreras";
          this.TablaCarreras[0] = "Indicador";
          this.TablaCarreras[1] = "Nombre";
        } else if (op == 2) {
          this.comboListaCarrera = data;
          this.MiCarrera = null;
          this.TituloCarreras = "";
          this.TablaCarreras[0] = "";
          this.TablaCarreras[1] = "";
        }
      }, error => { console.error(error + " ") })
    } else {
      this.Carreras = null;
      this.TituloCarreras = "";
      this.TablaCarreras[0] = "";
      this.TablaCarreras[1] = "";
      this.controlLista = 1;
    }
  }

  //Leer Persona
  public buscarCarrera() {
    var filtrovalor = this.filtrarCarrera.getRawValue()['combofiltro'];
    if (this.controlLista == 1) {
      this.servi.getCarrera('/' + filtrovalor).subscribe((data: {}) => {
        this.MiCarrera = data;
        this.TituloCarrera = "Carrera Seleccionada";
        this.TabBusCarrera[0] = "Indicador";
        this.TabBusCarrera[1] = "Nombre";

      }, error => { console.error(error + " ") });
    } else {
      this.MiCarrera = null;
      this.TituloCarrera = "";
      this.TabBusCarrera[0] = "";
      this.TabBusCarrera[1] = "";
      this.controlLista = 1;
    }
  }

  public limpiarLista() {
    this.controlLista = 0;
  }

  ngOnInit(): void {
    this.ListaCarreras = this.formBuilder.group(
      {

      });
  }
}
