import { OnInit, Component } from '@angular/core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    faBars = faBars;
    faSearch = faSearch;

    constructor() {

    }

    ngOnInit(): void {

    }
}