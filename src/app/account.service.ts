import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  AccountData = 'https://www.cdc.gov/coronavirus/2019-ncov/map-data-cases.csv';

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get(this.AccountData, {responseType: 'text'});
    }
}
