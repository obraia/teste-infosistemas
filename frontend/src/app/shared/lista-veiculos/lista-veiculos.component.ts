import { OnInit, Component } from '@angular/core';
import { } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../../services/api.service';
import { Veiculo } from '../../models/veiculo.iterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-veiculos',
  templateUrl: './lista-veiculos.component.html',
  styleUrls: ['./lista-veiculos.component.scss']
})
export class ListaVeiculosComponent implements OnInit {

  veiculos: Veiculo[];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getData('/veiculos')
      .subscribe(response => {
        this.veiculos = response;
      });
  }

  goToVeiculoInfo(veiculo: Veiculo) {
    this.router.navigateByUrl('/info-veiculo', { state: veiculo });
  }
}