import { Component } from '@angular/core';
import { CedulaService } from './cedula.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private cedulaService: CedulaService){}
  title = 'testApp';
  cedula = "";
  resultado = "";
  updateCedula(e){
    this.cedula = e.target.value;
  }

  
  validate(){
    this.cedulaService.validarPorCedula(this.cedula).subscribe(
      (data) => {
        console.log(data);
      },      (error) => {
        this.resultado = error.error.text;
      } 
    ) 

  }
}
