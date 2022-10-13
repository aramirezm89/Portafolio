import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { escape } from 'querystring';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenubarComponent implements OnInit {
  items!: MenuItem[];
  constructor() {}

  ngOnInit(): void {
     this.items = [
       {
         label: 'Sobre mi',
         url: '#quienSoy',
         target: '_self',
       },
       {
         label: 'Proyectos',
         url: '#proyectos',
         target: '_self',
       },
       {
         label: 'Título Profesional y cursos',
         url: '#titulo',
         target: '_self',
       },
     ];
  }
}
