import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import {ServicioService} from '../servicio.service';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css']
})
export class CarreraComponent implements OnInit {
  Carreras: any = [];              //Lista carreras
  TituloCarreras = "";             //Titulo Lista de carreras
  TablaCarreras: any = [];        //Encabezados tabla Lista de carreras 

  title = "Manejo Carreras";
  controlLista = 1;

  //Form group
  ListaCarreras = new FormGroup(
    {

    }
  );

  constructor(
    private formBuilder: FormBuilder, 
    private servi: ServicioService,
    Router : Router
  ) { }

  // Consultar carrera
  public consultaCarreras(op:any)
  {
    
      this.servi.getCarreras().subscribe((data: any) => 
      {
        this.Carreras = JSON.parse(data);
        this.TituloCarreras = "LISTA DE CARRERAS";
        this.TablaCarreras[0] = "Indicador";
        this.TablaCarreras[1] = "Nombre Carrera";
      },
      error => { console.error(error + " ") });      
  }

  //Limpiar lista
  public LimpiarLista() 
  {
  this.controlLista = 0;
  }

  ngOnInit(): void {
    this.ListaCarreras = this.formBuilder.group(
      {

      });
  }
}
