import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Veiculo} from '../models/veiculo.iterface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'http://localhost:3333'

  constructor(private http: HttpClient) { }

  getData(endpoint) {
    return this.http.get<Veiculo[]>(this.url + endpoint);
  }
}
