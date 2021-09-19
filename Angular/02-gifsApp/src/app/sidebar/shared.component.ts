import { Component, OnInit } from '@angular/core';
import { GifservicesService } from '../gifs/services/gifservices.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent  {

  constructor(private gifService: GifservicesService){

  }

  get historial(){
    console.log(this.gifService.historial)
    return this.gifService.historial
    
  }

  buscarGif(argument: string){
    console.log(argument)
    this.gifService.buscarGifs(argument)
  }


}
