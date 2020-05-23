import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Veiculo } from '../models/veiculo';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'http://localhost:3333'

  constructor(private http: HttpClient) { }

  adicionarVeiculo(veiculo: Veiculo) {
    veiculo.id = undefined;
    return this.http.post<any>(this.url + '/veiculos', veiculo);
  }

  editarVeiculo(veiculo: Veiculo) {
    return this.http.put<any>(this.url + '/veiculos', veiculo);
  }

  deletarVeiculo(id: number) {
    return this.http.delete<any>(this.url + '/veiculos/?id=' + id);
  }

  getVeiculoById(id: number) {
    return this.http.get<Veiculo>(this.url + '/pesquisa/?id=' + id);
  }

  getVeiculos() {
    return this.http.get<Veiculo[]>(this.url + '/veiculos');
  }
}
