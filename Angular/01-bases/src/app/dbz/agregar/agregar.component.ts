import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz-interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {
@Input() personajes:  Personaje[]
@Input() personajeNuevo:  Personaje
  
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
}
