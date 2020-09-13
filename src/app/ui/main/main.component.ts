import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { AccountService } from 'src/app/account.service';

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
  accountData: any[] = [];
  title = 'flower';
  value: boolean;

  cities1: SelectItem[];
  cities2: City[];
  selectedCity1: City;
  selectedCity2: City;

  constructor(private account: AccountService) {
    this.cities1 =
    [ {label: 'charts', value: {id: 1, name: 'charts', code: 'ch'}},
      {label: 'pie', value: {id: 3, name: 'pie', code: 'pie'}},
      {label: 'history', value: {id: 1, name: 'history', code: 'his'}}
    ];
  }
    ngOnInit(): void {
      this.getData();
  }
  getData(): any {
    this.account.getInfo().subscribe(data => {
      const list = data.split('\n');
      list.forEach( e => {
      this.accountData.push(e);
      });
      });
  }
}
