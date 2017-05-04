import { Component } from '@angular/core';

@Component({
    selector: 'footer',
    templateUrl: './footer.html',
    host: {
        '[class.footer]': 'true',
    }
})
export class FooterComponent {

    categories = [];
    types = [];

    constructor() {
        for (let i = 0; i < 8; i++) {
            this.categories.push({
                name: `Category ${i+1}`
            });
        }

        for (let i = 0; i < 4; i++) {
            this.types.push({
                name: `Type ${i+1}`
            });
        }
    }

}