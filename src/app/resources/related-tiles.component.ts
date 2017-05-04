import { Component, Input} from "@angular/core";

@Component({
    selector: 'related-tiles',
    templateUrl: 'related-tiles.html',
    host: {
        '[class.related-tiles]': 'true',
    }
})

export class RelatedTilesComponent {
    @Input() resources;
}