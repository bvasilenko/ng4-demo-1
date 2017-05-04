import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";

@Component({
    selector: 'feedback',
    templateUrl: 'feedback.html',
    host: {
        '[class.feedback]': 'true',
    }
})

export class FeedbackComponent implements OnInit {
    filterOptions = [
        { text: 'Recommended', value: 'recommended' },
        { text: 'All', value: 'all' },
    ];

    selectedFilter: string;

    @Input() posts;
    @Output() filterChange = new EventEmitter(true);

    ngOnInit() {
        this.selectedFilter = this.filterOptions[0].value;
        this.setSelectedFilter(this.selectedFilter);
    }

    setSelectedFilter(value: string) {
        this.selectedFilter = value;

        this.filterChange.emit(value);
    }
}