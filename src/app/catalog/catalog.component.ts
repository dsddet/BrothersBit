import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';




@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CatalogComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.nullValidator,
    Validators.email,
  ]);
  constructor() {

  }

  ngOnInit(): void {
  }



}
