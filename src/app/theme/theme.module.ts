import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatSliderModule, MatMenuModule,MatToolbarModule],
  exports: [MatSliderModule, MatMenuModule,MatIconModule,MatToolbarModule],
})
export class ThemeModule {}
