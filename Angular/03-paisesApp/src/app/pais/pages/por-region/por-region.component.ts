import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {
  regiones : string[]= ["africa", "americas", "asia", "europe", "oceania"]
  paises: Country[] = []
  regionActiva: string = ""
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }
  activarRegion(region: string){
    this.regionActiva = region
    this.paisService.getCountryByRegion(region).subscribe(
      paises =>{
        this.paises = paises
      }
      )
  }
}
