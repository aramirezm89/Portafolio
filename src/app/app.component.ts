import { Component, OnInit } from '@angular/core';
import { ProyectoTecologia } from './interfaces/proyecto';
import { CardServiceService } from './services/card-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  proyectos: ProyectoTecologia[] = [];
  tecnologias:ProyectoTecologia[]=[];
  title = 'Portafolio';

  constructor(public cardService:CardServiceService){}
  ngOnInit(): void {
    this.proyectos = this.cardService.proyectos;
    this.tecnologias = this.cardService.tecnologias;
    console.log(this.tecnologias)
  }
}
