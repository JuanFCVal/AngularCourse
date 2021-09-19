import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {
  termino: string = ""
  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(valor =>{
      this.onDebounce.emit(valor)
    })
  }
  @Output() onEnter:  EventEmitter<string> = new EventEmitter;
  @Output() onDebounce:  EventEmitter<string> = new EventEmitter;
  debouncer: Subject<string> = new Subject();

  buscar(){
    this.onEnter.emit(this.termino);
  }
  teclaPresionada(){
    this.debouncer.next(this.termino);

  }
}
