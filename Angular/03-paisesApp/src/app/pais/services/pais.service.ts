import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  
  private _apiUrl: string = "https://restcountries.eu/rest/v2"
  get httpParams(){
    return new HttpParams().set(
      'fields', 'name;capital;alpha2code;flag;population'
    )}
  constructor(private http: HttpClient) { }
  buscarPais(termino: string): Observable<Country[]>{
    const url = `${this._apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url, {params : this.httpParams}); //Se agrega el tipado de la respuesta
  }
  buscarCapital(termino: string): Observable<Country[]>{
    const url = `${this._apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url, {params : this.httpParams}); //Se agrega el tipado de la respuesta
  }
  getCountryById(termino: string): Observable<Country>{
    const url = `${this._apiUrl}/alpha/${termino}`
    return this.http.get<Country>(url); //Se agrega el tipado de la respuesta
  }
  getCountryByRegion(termino: string): Observable<Country[]>{{

    const url = `${this._apiUrl}/region/${termino}`
    return this.http.get<Country[]>(url, {params : this.httpParams}); //Se agrega el tipado de la respuesta
  }
  }
}
