import { Component, OnInit } from '@angular/core';
import { ProyectoTecologia } from './interfaces/proyecto';
import { CardServiceService } from './services/card-service.service';
import { GaleriaService } from './services/galeria.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  hola: string = 'lklk';
  proyectos: ProyectoTecologia[] = [];
  tecnologias: ProyectoTecologia[] = [];
  images: any[] = [];
  title = 'Portafolio';
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '960px',
      numVisible: 4,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  constructor(
    public cardService: CardServiceService,
    private galeriaService: GaleriaService
  ) {}
  ngOnInit(): void {
    this.proyectos = this.cardService.proyectos;
    this.tecnologias = this.cardService.tecnologias;
    this.images = this.galeriaService.data;
    console.log(this.images);
  }

  mostrar(elemento: any) {
    console.log(elemento);
  }
}
