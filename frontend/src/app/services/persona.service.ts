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
export class PersonaService {

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

  //-------------------------Persona-------------------------
  //Listar Personas (CRUL)
  getPersonas(): Observable<any>
  {
    return this.http.get(this.Url + "/persona", httpOptions)
  }

  //Leer Persona (CRUL)
  getPersona(id: any): Observable<any>
  {
    return this.http.get(this.Url + "/persona"+id, httpOptions)
  }

  //Crear Persona (CRUL)
  async postPersona(data:{}): Promise<any>
  {
    return this.http.post(this.Url + "/persona", data, httpOptions).toPromise()
  }

  //Actualizar Persona (CRUL)
  async updatePersona(data:{}):Promise<any>
  {
    return this.http.put(this.Url+ "/persona", data, httpOptions).toPromise()
  }
}
