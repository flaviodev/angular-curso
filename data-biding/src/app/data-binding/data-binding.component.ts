import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  nomeDoCurso: string =  "Angular";

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }

  url: string = "http://google.com";
  urlImagem: string = "http://lorempixel.com/400/200/nature/";

  valorAtual: String = '';
  valorSalvo: String = '';
  ultimoValor: String = '';

  mouseOver: boolean = false;

  constructor() { }

  botaoClicado() {
    alert("Botão clicado");
  }

  teclaPressionada(evento:KeyboardEvent) {
    this.ultimoValor = evento.key;
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor:String) {
    this.valorSalvo = valor;
  }

  getValor(): String {
    return "valor";
  }

  mouseOverOut() {
    this.mouseOver = !this.mouseOver;
  }

  ngOnInit() {
  }

}
