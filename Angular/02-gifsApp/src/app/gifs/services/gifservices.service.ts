import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGiftsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifservicesService {

    private _historial: string[] = [];
    private servicioUrl: string = 'https://api.giphy.com/v1/gifs/'
    private _apiKey: string = "t66AqhmWVs4oYGOybOT3tAN2vDvGpVxi";
    public resultados: Gif[] = []
    constructor(private http: HttpClient){
      // if(localStorage.getItem('historial') != null){
      //   this._historial = JSON.parse( localStorage.getItem('historial')); 
      // }
      this._historial = JSON.parse(localStorage.getItem("historial")) || []
      this.resultados = JSON.parse(localStorage.getItem("resultados")) || []

    }

    get historial(){
      return [...this._historial];
    }
    buscarGifs(query: string){
      query = query.trim().toLocaleLowerCase();
      if( !this._historial.includes(query) ){
        this._historial.unshift(query); //Añade al principio
        this._historial = this._historial.splice(0,20);
        localStorage.setItem("historial", JSON.stringify(this._historial));

      }    
      const params =  new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', '10')
      .set('q', query);
      this.http.get<SearchGiftsResponse>(`${this.servicioUrl}search`,{params})
      .subscribe((resp: SearchGiftsResponse) =>{
        this.resultados = resp.data;
        localStorage.setItem("resultados", JSON.stringify(this.resultados));
      })
    }


}
