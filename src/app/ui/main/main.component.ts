import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

interface City
{
  name: string; code: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = 'flower';
  value: boolean;

  cities1: SelectItem[];
  cities2: City[];
  selectedCity1: City;
  selectedCity2: City;

  constructor() {
    this.cities1 =
    [ {label: 'charts', value: {id: 1, name: 'charts', code: 'ch'}},
      {label: 'pie', value: {id: 3, name: 'pie', code: 'pie'}},
      {label: 'history', value: {id: 1, name: 'history', code: 'his'}}
    ];
  }
    ngOnInit(): void {
  }

}
