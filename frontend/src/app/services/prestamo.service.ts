import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httOptions = 
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}


@Injectable({
  providedIn: 'root'
})
export class PrestamoService {
  private Url: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  
  //-------------------Prestamos--------------------------
  //Metodo crear Prestamo
  async postPrestamo(data:{}): Promise<any>
  {
    return this.http.post(this.Url+"/prestamo", data, httOptions ).toPromise()
  }
  
  //Metodo Leer Prestamo
  getPrestamo(id:any): Observable<any>
  {
    return this.http.post(this.Url+"/prestamo"+id, httOptions)
  }

  //Metodo Actualizar Prestamo
  async updatePrestamo(data:{}): Promise<any>
  {
    return this.http.put(this.Url+"/prestamo", data, httOptions).toPromise()
  }

  getPrestamos(): Observable<any>
  {
    return this.http.get(this.Url+"/prestamo", httOptions)
  }

}
