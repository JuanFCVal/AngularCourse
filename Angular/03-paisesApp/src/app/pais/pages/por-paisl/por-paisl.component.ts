import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-paisl',
  templateUrl: './por-paisl.component.html',
  styles: [
  ]
})
export class PorPaislComponent implements OnInit {
  termino: string = "";
  hayError: boolean = false;
  constructor(private paisService : PaisService) { }

  ngOnInit(): void {
  }
  buscar(){
    console.log(this.termino)
    this.paisService.buscarPais(this.termino).subscribe(
      resp =>{
        this.hayError = false;
        console.log(resp);
      }, (err) =>{
        this.hayError = true;
        console.log('Error')
        console.info(err)
      }
    )
  }
}
