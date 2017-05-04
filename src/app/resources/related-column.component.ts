import { Component, Input} from "@angular/core";

@Component({
    selector: 'related-column',
    templateUrl: 'related-column.html',
    host: {
        '[class.related-column]': 'true',
    }
})

export class RelatedColumnComponent {
    @Input() resources;
}