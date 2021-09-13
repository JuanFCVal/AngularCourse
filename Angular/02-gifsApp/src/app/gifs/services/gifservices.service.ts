import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGiftsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifservicesService {

    private _historial: string[] = [];
    private _apiKey: string = "t66AqhmWVs4oYGOybOT3tAN2vDvGpVxi";
    public resultados: Gif[] = []
    constructor(private http: HttpClient){

    }
    get historial(){
      return [...this._historial];
    }
    buscarGifs(query: string){
      query = query.trim().toLocaleLowerCase();
      if( !this._historial.includes(query) ){
        this._historial.unshift(query); //Añade al principio
        this._historial = this._historial.splice(0,20);
      }    
      this.http.get<SearchGiftsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this._apiKey}&q=${query}&limit=10`)
      .subscribe((resp: SearchGiftsResponse) =>{
    
        console.log(resp.data);
        this.resultados = resp.data;
      })
    }


}
