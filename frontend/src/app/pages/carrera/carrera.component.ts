import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

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

  datos: any = [];

  TituloCarrera = "";              //Titulo de carrera buscada
  MiCarrera: any = [];             //Carrera buscada
  TabBusCarrera: any = [];        //Encabezados tabla carrera buscada 
  comboListaCarrera: any = [];     //Combo buscar carrera

  title = "Manejo Carreras";
  controlLista = 1;
  BuscarEvalor = 1;

  /*Control de formularios*/
  mostrarCrear: Boolean = false;
  mostrarActualizar: Boolean = false;



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

  formularioCarrera = new FormGroup({
    nombre_carrera: new FormControl('', Validators.required)
  });

  formularioActualizar = new FormGroup({
    id_carrera: new FormControl(),
    nombre_carrera: new FormControl('', Validators.required)
  })

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router
  ) { }

  //Funcion para mostrar elementos en el html
  mostrarHtml(op:any) {
    if (op==1){
      if (this.mostrarCrear) {
        this.mostrarCrear = false;
      } else {
        this.mostrarCrear = true;
      }
    }else{
      if (this.mostrarActualizar) {
        this.mostrarActualizar = false;
      } else {
        this.mostrarActualizar = true;
      }
    }
  }


  //Crear Carrera
  public insertarCarrera() {
    var dataCarrera = this.formularioCarrera.value
    this.servi.insertCarrera(dataCarrera)
    alert('Se ha agregado esta perra carrera: '+dataCarrera.nombre_carrera)
    
  }

  //Leer Carrera
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

  //Actualizar Carrera
  public actualizarCarrera() {
    var dataCarrera = this.formularioActualizar.value
    console.log(dataCarrera)
    this.servi.updateCarrera(dataCarrera)
  }

  //Listar Carrera
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

  public limpiarLista() {
    this.controlLista = 0;
  }

  ngOnInit(): void {
    this.ListaCarreras = this.formBuilder.group(
      {

      });
  }
}
