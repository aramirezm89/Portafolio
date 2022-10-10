import { Component, Input, OnInit } from '@angular/core';
import { ProyectoTecologia } from '../../interfaces/proyecto';
@Component({
  selector: 'app-tecnologia-tarjeta',
  templateUrl: './tecnologia-tarjeta.component.html',
  styleUrls: ['./tecnologia-tarjeta.component.css'],
})
export class TecnologiaTarjetaComponent implements OnInit {
  @Input() tecnologia!: ProyectoTecologia;
  constructor() {}

  ngOnInit(): void {}
}
