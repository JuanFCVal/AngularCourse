import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CedulaService {

  constructor(private http: HttpClient) { }

  validarPorCedula(termino: string){

    const url = `http://localhost:4567/cedula/${termino}`
    let headers: HttpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
      'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS'
    });

      return  this.http.get(url, { headers: headers })
        
      
  }
}

