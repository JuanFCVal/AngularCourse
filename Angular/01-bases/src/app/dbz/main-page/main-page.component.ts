import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz-interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {
  personajes: Personaje[] = [
    {nombre:"Goku",poder:150},{nombre:"Vegeta",poder:150}
  ]
  personajeNuevo: Personaje = {
    nombre : '',
    poder: 0
  }
  agregar(){
    if(this.personajeNuevo.nombre.trim().length ===0){
      return;
    }
      console.log(this.personajeNuevo)
      this.personajes.push(this.personajeNuevo);
      this.personajeNuevo={
        nombre: '',
        poder: 0
      }
    
    
  }
  // cambiarNombre(event: any){
  //   console.log(event.target.value)

  // }


}
