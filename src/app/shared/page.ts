import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

import { Unsubscriber, UnsubscriberFactory } from 'app/shared';

export abstract class Page implements OnDestroy {

    protected _unsubscriber: Unsubscriber;

    protected constructor(
        protected _changeDetector: ChangeDetectorRef,
        protected _unsubscriberFactory: UnsubscriberFactory,
    ) {
        this._unsubscriber = this._unsubscriberFactory.new();
    }

    when<T>(observable: Observable<T>, handler: (next: T) => void) {
        this._unsubscriber.add(observable.subscribe(posts => {
            handler(posts);
            this._changeDetector.detectChanges();
        }));
    }

    ngOnDestroy() {
        this._unsubscriber.unsubscribeAll();
    }
}