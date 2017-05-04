import { ChangeDetectorRef, Directive } from '@angular/core';

const CLOSE_MENU_DELAY = 500;

@Directive({
    selector: '[menuToggle]',
    exportAs: 'menuToggle',
})
export class MenuToggleDirective {
    isOpen = false;

    private _deferredClose;

    constructor(private _changeDetector: ChangeDetectorRef) {}

    open() {
        this._cancelDeferredClose();

        setTimeout(() => {
            this.isOpen = true;
            this._changeDetector.detectChanges();
        });
    }

    close() {
        this.isOpen = false;
        this._changeDetector.detectChanges();
    }

    closeDeferred() {
        this._cancelDeferredClose();

        this._deferredClose = setTimeout(() => {
            this.close();
        }, CLOSE_MENU_DELAY);
    }

    private _cancelDeferredClose() {
        if (this._deferredClose) {
            clearTimeout(this._deferredClose);
        }
    }
}