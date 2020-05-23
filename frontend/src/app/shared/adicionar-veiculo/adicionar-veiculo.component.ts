import { OnInit, Component } from '@angular/core';
import { } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Veiculo } from 'src/app/models/veiculo';

@Component({
    selector: 'app-adicionar-veiculo',
    templateUrl: './adicionar-veiculo.component.html',
    styleUrls: ['./adicionar-veiculo.component.scss']
})
export class AdicionarVeiculoComponent implements OnInit {

    formVeiculo: FormGroup;
    isFormValid: Boolean;

    constructor(private apiService: ApiService, private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.createForm(new Veiculo());
    }

    createForm(veiculo: Veiculo) {
        this.formVeiculo = this.formBuilder.group({
            placa: [veiculo.placa],
            chassi: [veiculo.chassi],
            renavam: [veiculo.renavam],
            modelo: [veiculo.modelo],
            marca: [veiculo.marca],
            ano: [veiculo.ano]
        });
    }

    onSubmit() {
        if (this.formVeiculo.valid) {
            this.apiService.adicionarVeiculo(this.formVeiculo.value)
                .subscribe(response => {
                    alert(response.message)
                    this.formVeiculo.reset(new Veiculo());
                });
        }else{
            alert('O formulário não foi preenchido de forma válida');
        }
    }
}