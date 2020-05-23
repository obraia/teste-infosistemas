import { Component, OnInit, Input } from '@angular/core';
import { Veiculo } from 'src/app/models/veiculo.iterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-veiculo',
  templateUrl: './info-veiculo.component.html',
  styleUrls: ['./info-veiculo.component.scss']
})
export class InfoVeiculoComponent implements OnInit {

  veiculo: Veiculo;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.veiculo = history.state;
  }
}
