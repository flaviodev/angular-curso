import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, 
    AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.scss']
})

// boa prática de programação em angular, declarar as interfaces do ciclo de vida
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, 
    AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {

  @Input() valorInicial: number = 10;

  constructor() { 
    this.log('constructor');
  }

  // utilizado usualmente  para realizar  comunicação com serviços do backend quando NÃO há
  // property biding
  ngOnInit() {
    this.log('ngOnInit');
  }

  // utilizado usualmente  para realizar  comunicação com serviços do backend quando há
  // property biding
  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');    
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');    
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');    
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');    
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');    
  }

  log(text: string) {
    console.log(text);
  }
}
