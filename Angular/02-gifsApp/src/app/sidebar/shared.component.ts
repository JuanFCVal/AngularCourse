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
    return this.gifService.historial
  }


}
