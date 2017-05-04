import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';
import { routing } from './resources.routing';
import { FeedbackComponent } from './feedback.component';
import { ResourcePage }   from './resource.page';
import { RelatedColumnComponent } from './related-column.component';
import { RelatedTilesComponent } from './related-tiles.component';
import { ResourceInfoComponent } from './resourceinfo.component';
import { SponsoredComponent } from './sponsored.component';

@NgModule({
    imports: [
        SharedModule,
        routing,
    ],
    declarations: [
        FeedbackComponent,
        ResourcePage,
        ResourceInfoComponent,
        RelatedColumnComponent,
        RelatedTilesComponent,
        SponsoredComponent,
    ],
})

export class ResourcesModule {}
