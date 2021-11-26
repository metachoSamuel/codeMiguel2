import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { PrestamoService } from 'src/app/services/prestamo.service';

@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.component.html',
  styleUrls: ['./prestamo.component.css']
})
export class PrestamoComponent implements OnInit {

  Prestamos: any = [];
  TituloPrestamos = "";
  TablaPrestamos: any = [];

  TituloPrestamo = "";
  MiPrestamo: any = [];
  TabBusPrestamo: any = [];
  comboListaPrestamo: any = [];


  title = "Manejo Prestamos";
  controlLista = 1;
  BuscarEvalor = 1;

  //Cotrol Formularios
  mostrarCrear: boolean = false;
  mostrarActualizar: boolean = false;

  //FormGroup
  ListaPrestamos = new FormGroup({});

  filtrarPrestamo = new FormGroup({
    combofiltro: new FormControl()
  })

  formularioCrear = new FormGroup({

  })

  constructor(
    private formBuilder: FormBuilder,
    private servi: PrestamoService,
    Router: Router
  ) { }

  public consultarPrestamo(op: any) {
    if (this.controlLista == 1) {
      this.servi.getPrestamos().subscribe((data: any) => {
        if (op == 1) {
          this.Prestamos = data;
          this.TituloPrestamos = "Listar Carreras";
          this.TablaPrestamos[0] = "Indicador";
          this.TablaPrestamos[1] = "fecha prestamo";
          this.TablaPrestamos[2] = "fecha entrega";
          this.TablaPrestamos[3] = "Persona";
          this.TablaPrestamos[4] = "Elemento";
        } else if (op == 2) {
          this.comboListaPrestamo = data;
          this.MiPrestamo = null;
          this.TituloPrestamo = "";
          this.TablaPrestamos[0] = "";
          this.TablaPrestamos[1] = "";
          this.TablaPrestamos[2] = "";
          this.TablaPrestamos[3] = "";
          this.TablaPrestamos[4] = "";
        }
      }, error => { console.error(error + " ") })
    } else {
      this.Prestamos = null;
      this.TituloPrestamo = "";
      this.TablaPrestamos[0] = "";
      this.TablaPrestamos[1] = "";
      this.TablaPrestamos[2] = "";
      this.TablaPrestamos[3] = "";
      this.TablaPrestamos[4] = "";
      this.controlLista = 1;
    }
  }

  public LimpiarLista() {
    this.controlLista = 0;
  }

  ngOnInit(): void {
  }

}
