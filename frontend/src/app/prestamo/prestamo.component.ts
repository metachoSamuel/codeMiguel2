import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.component.html',
  styleUrls: ['./prestamo.component.css']
})
export class PrestamoComponent implements OnInit {

  Prestamos: any=[];
  TituloPrestamos = "";
  TablaPrestamos:any =[];

  TituloPrestamo = "";
  MiPrestamo:any = [];
  TabBusPrestamo:any = [];
  comboListaPrestamo: any = [];


  title="Manejo Prestamos";
  controlLista=1;
  BuscarEvalor=1;

  ListaPrestamos = new FormGroup({});

  filtrarPrestamo = new FormGroup({
    combofiltro: new FormControl()
  })

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router
  ) { }

  //Culsultar prestamo
  public consultarPrestamo(op: any){
    if(this.controlLista==1){
      this.servi.getPrestamo().subscribe((data: any) => {
        if(op==1){
          let dat = data;
          this.Prestamos = data;
          this.TituloPrestamo = 'LISTA PRESTAMOS';
          this.TablaPrestamos[0]='nombre'
        }else if (op==2){
          this.comboListaPrestamo = data;
          this.MiPrestamo = null;
          this.TabBusPrestamo[0]="xd";
        }else if(op==3){

        }
      }, error => {console.error(error + " ")});
    }else{
      this.Prestamos = null;
      this.TituloPrestamos = "";
      this.TablaPrestamos[0]="";
      this.controlLista=1;
    }
    this.servi.getPrestamo().subscribe((data: any)=>{
      this.Prestamos=data;
      this.TituloPrestamo = "LISTAR PRESTAMOS";
      this.TablaPrestamos[0]="indicador";
      this.TablaPrestamos[1]="fecha de prestamo";
      this.TablaPrestamos[2]="fecha de entrega";
      this.TablaPrestamos[3]="Persona";
      this.TablaPrestamos[4]="Elemento prestado";
    }, error => {console.error(error+" ")});
  }

  ngOnInit(): void {
  }

}
