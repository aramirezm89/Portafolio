import { Injectable } from '@angular/core';
import { ProyectoTecologia } from '../interfaces/proyecto';

@Injectable({
  providedIn: 'root',
})
export class CardServiceService {
  proyectos: ProyectoTecologia[] = [];
  tecnologias: ProyectoTecologia[] = [];
  constructor() {
    this.proyectos = [
      {
        titulo: 'Heroe App',
        descripcion: `Proyecto realizado con Angular en el Frontend, C# en el Backend y MongoDB
        como motor de base de datos.`,
        img: '../assets/proyectos/heroesApp.PNG',
        webPage: 'https://heroe-app-angular.web.app/login',
        repositorio: 'https://github.com/aramirezm89/05-heroesApp',
      },
      {
        titulo: 'React Peliculas',
        descripcion:
          'Proyecto realizado con react en el Frontend, C# en el Backend ademas de SQL server como motor de base de datos',
        img: '../assets/proyectos/reactPelis.PNG',
        webPage: 'https://react-peliculas20220330.web.app/',
        repositorio: 'https://github.com/aramirezm89/react-peliculas',
      },
      {
        titulo: 'Angular Maps',
        descripcion:
          ' Proyecto realizado con Angular y bootstrap en el Frontend, y una libreria de Js llamada Mapbox',
        img: '../assets/proyectos/app-maps.PNG',
        webPage: 'https://app-maps2-angular.web.app/mapas',
        repositorio: 'https://github.com/aramirezm89/13-mapas-app-2',
      },
      {
        titulo: 'Angular Gif',
        descripcion:
          '  Proyecto realizado con Angular y PrimeNG, se trata de una aplicación que permite la busqueda de imagenes GIF y guarda historial de busqueda, gracias al api de GYPHY',
        img: '../assets/proyectos/gifapp.PNG',
        webPage: 'https://gifs-app20220512.web.app/',
        repositorio: 'https://github.com/aramirezm89/Angular-gifsApp',
      },
    ];

    this.tecnologias = [
      {
        titulo: 'Lenguajes',
        imagenes: [
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
        ],
      },
      {
        titulo: 'Base de Datos',
        iconos: [
          'devicon-microsoftsqlserver-plain-wordmark sqlIcon',
          'devicon-mongodb-plain-wordmark sqlIcon',
        ],
      },
      {
        titulo: 'Backend',
        imagenes: [
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
        ],
      },
      {
        titulo: 'Frontend',
        imagenes: [
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
        ],
      },
      {
        titulo: 'Maquetación',
        imagenes: [
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg',
        ],
      },
      {
        titulo: 'Control de versiones',
        iconos: [
          'devicon-git-plain-wordmark colored sqlIcon',
          'devicon-github-original-wordmark sqlIcon',
        ],
      },
    ];
  }
}
