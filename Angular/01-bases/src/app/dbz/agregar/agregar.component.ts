import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz-interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {

@Input() personajeNuevo:  Personaje
constructor(private dbzService: DbzService ){}
// @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();
  agregar(){
    if(this.personajeNuevo.nombre.trim().length ===0){
      return;
    }
      // this.onNuevoPersonaje.emit(this.personajeNuevo);
      this.dbzService.agregarPersonaje(this.personajeNuevo);
      this.personajeNuevo={
        nombre: '',
        poder: 0
      }
    
    
  }
}
