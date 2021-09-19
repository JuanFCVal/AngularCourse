import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

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
      switchMap((params) => this.paisService.getCountryById(params.codigoPais))
    ).subscribe(resp =>{
      console.log(resp)
    })

  }

}
