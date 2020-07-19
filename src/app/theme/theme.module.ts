import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [CommonModule, MatSliderModule, MatMenuModule,MatToolbarModule,MatInputModule,MatFormFieldModule],
  exports: [MatSliderModule, MatMenuModule,MatIconModule,MatToolbarModule,MatInputModule,MatFormFieldModule],
})
export class ThemeModule {}
