import { Component, Input, OnInit } from '@angular/core';
import {  ProyectoTecologia } from 'src/app/interfaces/proyecto';

@Component({
  selector: 'app-proyecto-tarjeta',
  templateUrl: './proyecto-tarjeta.component.html',
  styleUrls: ['./proyecto-tarjeta.component.css'],
})
export class ProyectoTarjetaComponent implements OnInit {
  @Input() proyecto!: ProyectoTecologia;
  constructor() {}

  ngOnInit(): void {

  }
}
