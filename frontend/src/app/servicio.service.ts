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

  private extractData(res: Response) {
   // console.log("22");

    let body = JSON.parse('' + res);
    //console.log("23 A " + body);
    return body || {};
  }

  private handleError<T>(operation = 'operation', result?: T) {
    //console.log(" ggggg ");
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T)
    };
  }

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

  getAsistencia(): Observable<any>
  {
    return this.http.get(this.Url + "/asistencia", httpOptions)
  }

  getPrestamo(): Observable<any>
  {
    return this.http.get(this.Url + "/prestamo", httpOptions)
  }
  /*
 // Método para insertar un nuevo Tipo de documento 

  async insertTipDoc(TipDocD): Promise<any> {

    //console.log(TipDocD, this.Url+"/tipdoc")

    return new Promise((resolve, reject) => {
      this.http.post(this.Url + "/tipdoc", TipDocD, httpOptions).toPromise()
    });
  }

  //-------------------------------------------------------------
 // Método para modificar un  Tipo de documento

  async updateTipDoc(cadena): Promise<any> {

    //console.log("33 " + cadena)
    //console.log("tales 60  " + cadena.id_tip_doc + " - " + cadena.tipo_documento+ " - " +  cadena.iniciales_tip_doc, this.Url + "/tipdoc")

 
    return new Promise((resolve, reject) => {
      this.http.put(this.Url + "/tipdoc", cadena, httpOptions).toPromise()
    });
  }
  
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

}
