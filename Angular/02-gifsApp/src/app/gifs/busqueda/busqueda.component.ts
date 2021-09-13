import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifservicesService } from '../services/gifservices.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent  {

  @ViewChild('txtBuscar') txtBuscar: ElementRef<HTMLInputElement>;
 
  constructor(private gifService: GifservicesService){

  }
  buscar( ){

    const valor = this.txtBuscar.nativeElement.value 
    if(valor.trim().length ===0){
      return;
    }
    this.gifService.buscarGifs(valor)
    this.txtBuscar.nativeElement.value =""
  }


}
