import { Component, Input} from "@angular/core";

@Component({
    selector: 'sponsored',
    templateUrl: 'sponsored.html',
    host: {
        '[class.sponsored]': 'true',
    }
})

export class SponsoredComponent {
    @Input() resources;
}