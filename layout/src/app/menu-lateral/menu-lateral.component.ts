import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css'],
  animations: [
      trigger('slideInOut', [
        state('in', style({
          transform: 'translate3d(-100%, 0, 0)'
        })),
        state('out', style({
          transform: 'translate3d(0, 0, 0)'
        })),
        transition('in => out', animate('400ms ease-in-out')),
        transition('out => in', animate('400ms ease-in-out'))
      ]),
    ]  
  })
export class MenuLateralComponent implements OnInit {

  menuState:string = 'out';

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  constructor() { }

  ngOnInit() {
  }

}
