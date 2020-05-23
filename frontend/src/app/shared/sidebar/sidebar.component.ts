import { OnInit, Component } from '@angular/core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    faBars = faBars;
    faSearch = faSearch;

    constructor(private router: Router) {

    }

    ngOnInit(): void {

    }

    goToListaVeiculos(){
        this.router.navigateByUrl('/lista-veiculos');
    }

    goToAdicionarVeiculo(){
        this.router.navigateByUrl('/adicionar-veiculo');
    }

    goToEditarVeiculo(){
        this.router.navigateByUrl('/editar-veiculo');
    }
}