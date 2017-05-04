import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'dropdown',
    template:
    `
     <div class="btn-group" dropdown [class.pull-right]="alignToRight">
        <button dropdownToggle class="{{ buttonClass }} dropdown-toggle">{{ selectedText || buttonText }} <span class="caret"></span></button>
        <ul *ngIf="options" dropdownMenu class="dropdown-menu">
            <li *ngFor="let option of options">
                <a role="button" (click)="select(option.value)"><i *ngIf="option.iconClass" class="{{ option.iconClass }}"></i> {{ option.text }}</a>
            </li>
        </ul>
    </div>
    `
})
export class DropdownComponent implements OnChanges {

    @Input() options: Array<{ text: string, value: string, iconClass?: string }>;
    @Input() selected: string;
    @Input() buttonText: string;
    @Input() alignToRight: boolean;
    @Input() buttonClass = "btn btn-default";

    @Output() selectedChange = new EventEmitter();

    selectedText: string;

    ngOnChanges() {
        if (!this.options || !this.options.length) {
            return;
        }
        
        if (typeof this.selected == 'undefined' && !this.buttonText) {
            this._setSelectedText(this.options[0].value);
        } else {
            this._setSelectedText(this.selected);
        }
    }

    select(value: string) {
        if (!this.buttonText) {
            this._setSelectedText(value);
        }
        this.selectedChange.emit(value);
    }

    private _setSelectedText(value: string) {
        let found = this._getOption(value);
        if (!found) {
            return;
        }

        this.selectedText = found.text;
    }

    private _getOption(value: string) {
        let found = null as any;

        this.options.every(option => {
            if (option.value == value) {
                found = option;
                return false;
            }
            return true;
        });

        return found;
    }

}