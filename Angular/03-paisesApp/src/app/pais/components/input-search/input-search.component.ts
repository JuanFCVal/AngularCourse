import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {
  termino: string = ""
  constructor() { }

  ngOnInit(): void {
  }
  @Output() onEnter:  EventEmitter<string> = new EventEmitter;

  buscar(){
    this.onEnter.emit(this.termino);
  }
}
