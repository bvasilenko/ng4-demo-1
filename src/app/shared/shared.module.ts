import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { RatingModule } from 'ng2-bootstrap/rating';

import { FooterModule } from './footer/footer.module';
import { HeaderbarModule } from './headerbar/headerbar.module';
import { StateModule } from './state/state.module';

import { DropdownComponent } from './dropdown/dropdown.component';

import { HttpService } from './services/http.service';
import { UnsubscriberFactory } from './services/unsubscriber.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DropdownModule.forRoot(),
        RatingModule.forRoot(),
        
        FooterModule,
        HeaderbarModule,
        StateModule,
    ],
    declarations: [
        DropdownComponent,
    ],
    providers: [
        HttpService,
        UnsubscriberFactory,
    ],
    exports: [
        CommonModule,
        FormsModule,
        DropdownModule,
        RatingModule,

        FooterModule,
        HeaderbarModule,
        DropdownComponent,
    ],
})
export class SharedModule { }
