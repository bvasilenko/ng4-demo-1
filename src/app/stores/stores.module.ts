import { NgModule } from '@angular/core';

import { FeedbackStore } from './feedback.store';
import { ResourceStore } from './resource.store';

@NgModule({
    providers: [
        FeedbackStore,
        ResourceStore
    ],
})
export class StoresModule { }
