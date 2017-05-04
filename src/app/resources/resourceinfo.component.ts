import { Component, Input } from "@angular/core";

@Component({
    selector: 'resourceinfo',
    templateUrl: 'resourceinfo.html',
    host: {
        '[class.resourceinfo]': 'true',
    }
})

export class ResourceInfoComponent {
    @Input() resource;
}