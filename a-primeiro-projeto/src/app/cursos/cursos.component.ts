import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: String;

  cursos:String[];

  constructor(cursosService: CursosService) { 
    this.nomePortal = "Meus cursos";

    this.cursos = cursosService.getCursos();
  }

  ngOnInit() {
  }

}
