import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectoTarjetaComponent } from './proyecto-tarjeta/proyecto-tarjeta.component';
import { PrimeNgModule } from '../prime-ng.module';
import { TecnologiaTarjetaComponent } from './tecnologia-tarjeta/tecnologia-tarjeta.component';



@NgModule({
  declarations: [
    ProyectoTarjetaComponent,
    TecnologiaTarjetaComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[ProyectoTarjetaComponent,TecnologiaTarjetaComponent]
})
export class ComponentsModule { }
