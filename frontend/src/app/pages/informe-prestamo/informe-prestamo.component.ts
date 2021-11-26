import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ignoreElements } from 'rxjs/operators';
import { AudioVisualService } from 'src/app/services/audio-visual.service';
import { PersonaService } from 'src/app/services/persona.service';
import { PrestamoService } from 'src/app/services/prestamo.service';

@Component({
  selector: 'app-informe-prestamo',
  templateUrl: './informe-prestamo.component.html',
  styleUrls: ['./informe-prestamo.component.css']
})
export class InformePrestamoComponent implements OnInit {

  listaPersonas: any;
  listaElementos: any;
  dataInforme: any = [];
  TituloPrestamos = "";
  TablaPrestamo: any = [];
  controlLista = 1;

  //Control Formularios
  mostrarCrear: boolean = false;
  mostrarListar: boolean = false;

  //Form Group
  formularioInforme = new FormGroup({
    id: new FormControl('', Validators.required),
    fechaInicio: new FormControl('', Validators.required),
    fechaFin: new FormControl('', Validators.required)
  })

  formularioListar = new FormGroup({

  })

  constructor(
    private servi: PrestamoService,
    private serviPersona: PersonaService,
    private serviElemento: AudioVisualService
  ) { }

  //Funcion para mostrar elementos html
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
      this.servi.postInformePrestamo(this.formularioInforme.value).subscribe(
        (data: any) => {
          this.dataInforme = data;
          this.TituloPrestamos = "Informe prestamo";
          this.TablaPrestamo[0] = "Indicador";
          this.TablaPrestamo[1] = "fecha de prestamo";
          this.TablaPrestamo[2] = "Fecha de entrega";
          this.TablaPrestamo[3] = "Elemento";
          this.TablaPrestamo[4] = "Estado";
          this.TablaPrestamo[5] = "Persona";

        }, error => { console.error(error) }
      )
    } else {
      this.dataInforme = null;
      this.TablaPrestamo[0] = "";
      this.TablaPrestamo[1] = "";
      this.TablaPrestamo[2] = "";
      this.TablaPrestamo[3] = "";
      this.TablaPrestamo[4] = "";
      this.TablaPrestamo[5] = "";
      this.controlLista = 1;
    }
  }

  public obtenerPersona() {
    this.serviPersona.getPersonas().subscribe((data:any)=>{
      this.listaPersonas = data;
    }, error => {
      console.error(error)
    })
  }

  public obtenerElemento() {
    this.serviElemento.getAudioVisuales().subscribe((data:any)=>{
      this.listaElementos = data;
    }, error=>{
      console.error(error)
    })
  }

  public limpiarLista(){
    this.controlLista = 0;
  }

  ngOnInit(): void {
  }

}
