import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Datos } from '../model/datos';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  //Entorno local
 // URL = 'http://localhost:8080/datos/';
 
  //Deploy
  URL = 'https://backendnf.herokuapp.com/datos/';



  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Datos[]>{
    return this.httpClient.get<Datos[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Datos>{
    return this.httpClient.get<Datos>(this.URL + `detail/${id}`);

  }

  public save(datos : Datos): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', datos);
  }

  public update(id: number, datos: Datos): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, datos);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }





}
