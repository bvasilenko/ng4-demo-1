import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    host: {
        '[class.app]': 'true',
    }
})
export class AppComponent {}