import { OnInit, Component } from '@angular/core';
import { } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-editar-veiculo',
    templateUrl: './editar-veiculo.component.html',
    styleUrls: ['./editar-veiculo.component.scss']
})
export class EditarVeiculoComponent implements OnInit {

    veiculo = {
        "id": 1,
        "placa": "GSR-2944", 
        "chassi": "5YA 6K72A6 Eg 7d0482", 
        "renavam": "99858477768", 
        "modelo": "A6 4.2 Quattro Tiptronic",
        "marca": "Audi", 
        "ano": 2000
    }; 

    constructor() {

    }

    ngOnInit(): void {

    }
}