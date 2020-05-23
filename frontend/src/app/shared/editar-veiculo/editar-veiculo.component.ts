import { OnInit, Component } from '@angular/core';
import { } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

import { Veiculo } from 'src/app/models/veiculo';

@Component({
    selector: 'app-editar-veiculo',
    templateUrl: './editar-veiculo.component.html',
    styleUrls: ['./editar-veiculo.component.scss']
})
export class EditarVeiculoComponent implements OnInit {

    formVeiculo: FormGroup;
    veiculos: Veiculo[];

    constructor(private apiService: ApiService, private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.createForm(new Veiculo());
        this.getVeiculos();
    }

    createForm(veiculo: Veiculo) {
        this.formVeiculo = this.formBuilder.group({
            id: [veiculo.id],
            placa: [veiculo.placa],
            chassi: [veiculo.chassi],
            renavam: [veiculo.renavam],
            modelo: [veiculo.modelo],
            marca: [veiculo.marca],
            ano: [veiculo.ano]
        });
    }

    getVeiculos() {
        this.apiService.getVeiculos()
            .subscribe(response => {
                this.veiculos = response;
            });
    }

    setVeiculo(id) {
        this.apiService.getVeiculoById(id)
            .subscribe(response => {
                this.formVeiculo.reset(response);
            });
    }

    onSubmit() {
        this.apiService.editarVeiculo(this.formVeiculo.value)
            .subscribe(response => {
                alert(response.message)
                this.formVeiculo.reset(new Veiculo());
                this.getVeiculos();
            });
    }
}