import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  pais!: Country;
  constructor(private activatedRoute: ActivatedRoute,
    private paisService:PaisService) { }
  ngOnInit(): void {
    // this.activatedRoute.params.subscribe( params =>{
    //   console.log(params.codigoPais, "Id")
    //   this.paisService.getCountryById(params.codigoPais).subscribe( resp=>{
    //     console.log(resp)
    //   })
    // } )

    this.activatedRoute.params.pipe(  
      switchMap((params) => this.paisService.getCountryById(params.codigoPais)),
    
    ).subscribe(pais =>{
      this.pais = pais
      console.log(pais)
    })

  }

}
