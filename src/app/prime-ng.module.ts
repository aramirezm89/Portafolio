import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { GalleriaModule } from 'primeng/galleria';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ButtonModule, CardModule, DividerModule, GalleriaModule,MenubarModule],
})
export class PrimeNgModule {}
