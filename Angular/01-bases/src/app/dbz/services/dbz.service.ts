import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz-interface";

@Injectable()

export class DbzService{
    constructor(){
        console.log("Servicio creado ")
    }

    private _personajes: Personaje[] = [
        {nombre:"Goku",poder:150},{nombre:"Vegeta",poder:150}
      ];

    get personajes(): Personaje[]{
        return [...this._personajes];
    }
    agregarPersonaje(personaje: Personaje){
            this._personajes.push(personaje)
    }
}