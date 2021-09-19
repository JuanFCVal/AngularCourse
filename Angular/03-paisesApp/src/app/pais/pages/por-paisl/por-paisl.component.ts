import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-paisl',
  templateUrl: './por-paisl.component.html',
  styles: [
  ]
})
export class PorPaislComponent implements OnInit {
  termino: string  = ""
  hayError: boolean = false;
  paises: Country[] = [];
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
    this.hayError = false;

  }
}
