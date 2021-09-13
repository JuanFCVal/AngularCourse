import { Component, OnInit } from '@angular/core';
import { GifservicesService } from '../services/gifservices.service';
import { Gif } from '../interfaces/gifs.interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent  {

  constructor(private gifService: GifservicesService) { }

  get resultados(): Gif[]{
    return this.gifService.resultados;
  }

}
