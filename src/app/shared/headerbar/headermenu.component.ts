import { Component } from '@angular/core';

@Component({
    selector: 'headermenu',
    templateUrl: './headermenu.html',
    host: {
        '[class.headermenu]': 'true',
    }
})
export class HeaderMenuComponent {

    categories = [];
    types = [];

    constructor() {
        for (let i = 0; i < 8; i++) {
            this.categories.push({
                name: `Category ${i+1}`
            });
        }

        for (let i = 0; i < 3; i++) {
            this.types.push({
                name: `Type ${i+1}`
            });
        }
    }

}