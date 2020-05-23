import { OnInit, Component } from '@angular/core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    isOpen: boolean;
    faBars = faBars;
    faSearch = faSearch;

    constructor(private api: ApiService, private router: Router) {
    }

    ngOnInit(): void {
        this.isOpen = false;
    }

    toggleMenu(isOpen: boolean) {
        const sidebar = document.getElementById('side-bar');

        if (isOpen) {
            sidebar.classList.remove('container--closed');
            sidebar.classList.add('container--opened');
        } else {
            sidebar.classList.remove('container--opened');
            sidebar.classList.add('container--closed');    
        }

        this.isOpen = isOpen;
    }

    searchById(id) {
        this.router.navigateByUrl('/limbo');

        if (id) {
            this.api.getVeiculoById(id)
                .subscribe(
                    response => this.router.navigateByUrl('/info-veiculo', { state: response }),
                    error => this.router.navigateByUrl('/info-veiculo', { state: error.error.data })
                );
        }
    }

    goToHome() {
        this.router.navigateByUrl('/');
    }

    goToListaVeiculos() {
        this.router.navigateByUrl('/lista-veiculos');
    }

    goToAdicionarVeiculo() {
        this.router.navigateByUrl('/adicionar-veiculo');
    }

    goToEditarVeiculo() {
        this.router.navigateByUrl('/editar-veiculo');
    }

    goToSobre() {
        this.router.navigateByUrl('/sobre');
    }
}