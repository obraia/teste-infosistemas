import { Component, OnInit, Input } from '@angular/core';
import { Veiculo } from 'src/app/models/veiculo';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-info-veiculo',
  templateUrl: './info-veiculo.component.html',
  styleUrls: ['./info-veiculo.component.scss']
})
export class InfoVeiculoComponent implements OnInit {

  veiculo: Veiculo;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.veiculo = history.state;
  }

  deletarVeiculo() {
    this.apiService.deletarVeiculo(this.veiculo.id)
      .subscribe(response => {
        alert(response.message);
        this.router.navigateByUrl('/lista-veiculos');
      });
  }
}
