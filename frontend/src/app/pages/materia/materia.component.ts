import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { MateriaService } from 'src/app/services/materia.service';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {

  Materias: any = [];  //listar asistencias

  TituloMaterias = "";
  TablaMateria: any = [];

  TituloMateria = "";              //Titulo de carrera buscada
  MiMateria: any = [];             //Carrera buscada
  TabBusMateria: any = [];        //Encabezados tabla carrera buscada 
  comboListaMateria: any = [];


  title = "Manejo Asistencias";
  controlLista = 1;
  BuscarEvalor = 1;

  listaCarreras:any = [];

  //Control formularios
  mostrarCrear: boolean = false;
  mostrarActualizar: boolean = false;

  //Form Group
  listaMaterias = new FormGroup({});

  filtrarMateria = new FormGroup({
    combofiltro: new FormControl()
  });

  formularioCrear = new FormGroup({
    nombre_materia: new FormControl('', Validators.required),
    id_carrera: new FormControl('', Validators.required)
  })

  formularioActualizar = new FormGroup({
    id_materia: new FormControl('', Validators.required),
    nombre_materia: new FormControl(''),
    id_carrera: new FormControl('')
  })

  constructor(
    private formBuilder: FormBuilder,
    private servi: MateriaService,
    private servicioCarrera: ServicioService,
    Router: Router
  ) {}

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
  public crearMateria() {
    var dataMateria = this.formularioCrear.value;
    this.servi.postMateria(dataMateria);
  }

  //Leer
  public buscarMateria() {
    var filtrovalor = this.filtrarMateria.getRawValue()['combofiltro'];
    if (this.controlLista==1){
      this.servi.getMateria('/'+filtrovalor).subscribe((data: {})=>{
        this.MiMateria = data;
        this.TituloMateria = "Materia Seleccionada";
        this.TabBusMateria[0] = "Indicador";
        this.TabBusMateria[1] = "nombre materia";
        this.TabBusMateria[2] = "Carrera";
      }, error => {console.log(error)});
    }else {
      this.MiMateria = null;
      this.TituloMateria = "";
      this.TabBusMateria[0] = "";
      this.TabBusMateria[1] = "";
      this.TabBusMateria[2] = "";
      this.controlLista=1;
    }
  }

  //Actualizar
  public actualizarMateria() {
    var dataMateria = this.formularioActualizar.value;
    this.servi.updateMateria(dataMateria);
  }

  //Listar
  public consultarMateria(op: any) {
    if(this.controlLista == 1) {
      this.servi.getMaterias().subscribe((data: any)=>{
        if (op == 1) {
          this.Materias = data;
          this.TituloMateria = "Listar Materias";
          this.TablaMateria[0] = "Indicador";
          this.TablaMateria[1] = "Nombre materia";
          this.TablaMateria[2] = "Carrera";
        }else if(op == 2){
          this.comboListaMateria = data;
          this.MiMateria = null;
          this.TituloMateria = "";
          this.TablaMateria[0] = "";
          this.TablaMateria[1] = "";
          this.TablaMateria[2] = "";
        }
      }, error => {console.error(error + "")})
    }else {
      this.Materias = null,
      this.TituloMateria = "";
      this.TablaMateria[0] = "";
      this.TablaMateria[1] = "";
      this.TablaMateria[2] = "";
      this.controlLista = 1;
    }
  }
  
  public obtenerCarrera() {
    this.servicioCarrera.getCarreras().subscribe((data:any)=>{
      this.listaCarreras = data;
    })
  }

  public limpiarLista() {
    this.controlLista = 0;
  }

  ngOnInit(): void {
  }

}
