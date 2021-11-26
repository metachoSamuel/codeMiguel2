import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';



const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private Url: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }


  //---------------------------Carreras---------------------------//
  // Método Listar carreras
  getCarreras(): Observable<any>
  {
    return this.http.get(this.Url + "/carrera" , httpOptions);   
  }
  // Método mostrar una carrera
  getCarrera(id:any): Observable<any> 
  {    
    return this.http.get(this.Url + "/carrera" + id, httpOptions);
  }
  //Crear una carrera
  async insertCarrera(data:{}): Promise<any>
  {
    return new Promise((resolve, reject)=>{
      this.http.post(this.Url + "/carrera", data, httpOptions).toPromise()
    })
  }

  //Actualizar una carrera
  async updateCarrera(data:{}): Promise<any>
  {
    return new Promise((resolve, reject)=>{
      this.http.put(this.Url + "/carrera", data, httpOptions).toPromise()
    });
  }

}
