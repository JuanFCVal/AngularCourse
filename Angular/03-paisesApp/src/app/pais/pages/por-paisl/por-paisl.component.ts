import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-paisl',
  templateUrl: './por-paisl.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class PorPaislComponent implements OnInit {
  termino: string  = ""
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;
  constructor(private paisService : PaisService) { }

  ngOnInit(): void {
  }
  buscar(termino: string){
    this.termino = termino
    this.paisService.buscarPais(termino).subscribe(
      paises =>{
        this.hayError = false;
        this.paises = paises
      }, (err) =>{
        this.hayError = true;
        this.paises = [];
        console.log('Error')
        console.info(err)
      }
    )
  }
  sugerencias(termino: string){
    this.termino = termino
    this.hayError = false;
    this.mostrarSugerencias = true;
this.paisService.buscarPais(termino).subscribe(paises =>{
  this.paisesSugeridos = paises
  this.paisesSugeridos = paises.splice(0,5),
  (err) =>this.paisesSugeridos = []
})
  }
  buscarSugerido(termino : string){
    this.buscar(termino);
  }
}
