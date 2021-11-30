import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder : string = '';


  debouncer: Subject<string> = new Subject();

  termino: string ='';

  constructor() { }

  // eL debouncer espera 300 milisegunods para emitr el siguiente valor
 ngOnInit(){
   this.debouncer
   .pipe(debounceTime(300))
   .subscribe( valor => {
     this.onDebounce.emit(valor);
    console.log('debounce', valor)
   });
 }

 TeclaPresionada(){
    this.debouncer.next( this.termino);
 }

 Buscar(): void{
    this.onEnter.emit(this.termino);
  }
}


