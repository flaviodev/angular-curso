import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  // acessando a variável local do input e alterando diretamente o DOM
  @ViewChild('campoInput') campoValorInput: ElementRef;

  incrementa() {
    //this.valor++;
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor:this.campoValorInput.nativeElement.value});
  }

  decrementa() {
    //this.valor--;
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor:this.campoValorInput.nativeElement.value});
  }


  constructor() { }

  ngOnInit() {
  }

}
