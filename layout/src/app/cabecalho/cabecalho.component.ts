import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']  
})
export class CabecalhoComponent implements OnInit {

  @Input() nomeModulo: string = '';

  @Output() toogleMenu = new EventEmitter();

  menuOnClick(evento) {
    this.toogleMenu.emit(evento);
  }

  constructor() { }

  ngOnInit() {
  }

}
