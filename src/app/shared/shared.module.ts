import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from 'src/app/prime-ng.module';
import { MenubarComponent } from './menubar/menubar.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    MenubarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FlexLayoutModule
  ],
  exports:[MenubarComponent]
})
export class SharedModule { }
