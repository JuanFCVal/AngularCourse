import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent  {

  constructor() { }


  valor: number = 0;
  base: number
  title = 'Contador app';

  acumular(valor: number){
    this.valor+= valor;
  }

}
