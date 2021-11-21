import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

import { AudioVisualService } from 'src/app/services/audio-visual.service';

@Component({
  selector: 'app-audio-visual',
  templateUrl: './audio-visual.component.html',
  styleUrls: ['./audio-visual.component.css']
})
export class AudioVisualComponent implements OnInit {

  AudioVisual: any = [];           
  TituloAudioVisuales = "";         
  TablaAudioVisual: any = [];       

  TituloAudioVisual = "";              
  MiAudioVisual: any = [];             
  TabBusAudioVisual: any = [];        
  comboListaAudioVisual: any = [];    

  title = "Manejo Carreras";
  controlLista = 1;
  BuscarEvalor = 1;

  /*Control de formularios*/
  mostrarCrear: Boolean = false;
  mostrarActualizar: Boolean = false;



  //Form group
  ListaAudioVisual = new FormGroup(
    {

    }
  );

  filtrarAudioVisual = new FormGroup(
    {
      combofiltro: new FormControl()
    }
  );

  formularioCrear = new FormGroup({
    elemento: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required)
  });

  formularioActualizar = new FormGroup({
    id_elemento: new FormControl(),
    elemento: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required)
  })

  constructor(
    private formBuilder: FormBuilder,
    private servi: AudioVisualService,
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


  //Crear AudioVisual
  public crearAudioVisual() {
    var dataAudioVisual = this.formularioCrear.value
    this.servi.insertAudioVisual(dataAudioVisual)
  }

  //Leer AudioVisual
  public buscarAudioVisual() {
    var filtrovalor = this.filtrarAudioVisual.getRawValue()['combofiltro'];
    if (this.controlLista == 1) {
      this.servi.getAudioVisual('/' + filtrovalor).subscribe((data: {}) => {
        this.MiAudioVisual = data;
        this.TituloAudioVisual = "Carrera Seleccionada";
        this.TabBusAudioVisual[0] = "Indicador";
        this.TabBusAudioVisual[1] = "Nombre";

      }, error => { console.error(error + " ") });
    } else {
      this.MiAudioVisual = null;
      this.TituloAudioVisuales = "";
      this.TabBusAudioVisual[0] = "";
      this.TabBusAudioVisual[1] = "";
      this.controlLista = 1;
    }
  }

  //Actualizar AudioVisual
  public actualizarAudioVisual() {
    var dataAudioVisual = this.formularioActualizar.value
    this.servi.updateAudioVisual(dataAudioVisual);
  }

  //Listar AudioVisual
  public consultarAudioVisual(op: any) {
    if (this.controlLista == 1) {
      this.servi.getAudioVisuales().subscribe((data: any) => {
        if (op == 1) {
          this.AudioVisual = data;
          this.TituloAudioVisuales = "Listar Carreras";
          this.TablaAudioVisual[0] = "Indicador";
          this.TablaAudioVisual[1] = "Nombre";
        } else if (op == 2) {
          this.comboListaAudioVisual = data;
          this.MiAudioVisual = null;
          this.TituloAudioVisual = "";
          this.TablaAudioVisual[0] = "";
          this.TablaAudioVisual[1] = "";
        }
      }, error => { console.error(error + " ") })
    } else {
      this.AudioVisual = null;
      this.TituloAudioVisual = "";
      this.TablaAudioVisual[0] = "";
      this.TablaAudioVisual[1] = "";
      this.controlLista = 1;
    }
  }

  public limpiarLista() {
    this.controlLista = 0;
  }

  ngOnInit(): void {
    this.ListaAudioVisual = this.formBuilder.group(
      {

      });
  }
}