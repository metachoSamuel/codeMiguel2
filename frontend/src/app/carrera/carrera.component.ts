import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ServicioService } from '../servicio.service';

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



  // Consultar carrera
  public consultaCarreras(op: any) {
    if (this.controlLista == 1) {
      //console.log("component")
      this.servi.getCarreras().subscribe((data: any) => {
        //console.error(" El listado 2 " );
        if (op == 1) {
          let dat = data;
          this.Carreras = data;
          this.TituloCarreras = "LISTA DE TIPOS DE DOCUMENTOS";
          this.TablaCarreras[0] = "indicador";
          this.TablaCarreras[1] = "Nombre";
          //console.error(" El listado 3 " + this.Carreras);
        }
        else if (op == 2) {
          this.comboListaCarrera = data;
          this.MiCarrera = null;
          this.TituloCarrera = "";
          this.TabBusCarrera[0] = "";
          this.TabBusCarrera[1] = "";
          //console.error(" El listado 4 " );
        }
        else if (op == 3) {/*
        this.comboEditarTipDoc  = JSON.parse(data);
        this.MiTipDocE = null;
        this.TituloTipDocEdit = ""; 
        // this.ActualizarATipDoc.removeControl("textnuevotipdoc");
        // this.ActualizarATipDoc.removeControl("textnuevoinicialestipdoc");
        console.error(" El listado 5 " );*/
        }
      },
        error => { console.error(error + " ") });
    }
    else {
      this.Carreras = null;
      this.TituloCarreras = "";
      this.TablaCarreras[0] = "";
      this.TablaCarreras[1] = "";
      this.controlLista = 1;
    }
    this.servi.getCarreras().subscribe((data: any) => {
      this.Carreras = data; //JSON.parse(data);
      this.TituloCarreras = "LISTA DE CARRERAS";
      this.TablaCarreras[0] = "Indicador";
      this.TablaCarreras[1] = "Nombre Carrera";
    },
      error => { console.error(error + " ") });
  }

  //Limpiar lista
  public LimpiarLista() {
    this.controlLista = 0;
  }

  // Consultar carrera por id
  public buscarCarrera() {
    var filtovalor = this.filtrarCarrera.getRawValue()['combofiltro'];
    this.servi.getCarrera('/' + filtovalor).subscribe((data: {}) => {
      this.MiCarrera = data;
      this.TituloCarrera = "TIPO DE DOCUMENTO SELECCIONADO";
      this.TabBusCarrera[0] = "Indicador";
      this.TabBusCarrera[1] = "Nombre";
    },
      error => { console.log(error) });
  }

  ngOnInit(): void {
    this.ListaCarreras = this.formBuilder.group(
      {

      });
  }
}
