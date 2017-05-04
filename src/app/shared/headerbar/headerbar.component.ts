import { Component } from '@angular/core';

const CLOSE_MENU_DELAY = 500;

@Component({
    selector: 'headerbar',
    templateUrl: './headerbar.html',
    host: {
        '[class.headerbar]': 'true',
    }
})
export class HeaderbarComponent {
    isNavMobileShown = false;
}