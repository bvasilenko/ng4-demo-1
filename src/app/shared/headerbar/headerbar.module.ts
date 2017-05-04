import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'ng2-bootstrap/dropdown';

import { HeaderbarComponent } from './headerbar.component';
import { HeaderMenuComponent } from './headermenu.component';
import { MenuToggleDirective } from './menu-toggle.directive';

@NgModule({
    imports: [
        CommonModule,
        DropdownModule.forRoot(),
    ],
    declarations: [
        HeaderbarComponent,
        HeaderMenuComponent,
        MenuToggleDirective,
    ],
    exports: [
        HeaderbarComponent,
        HeaderMenuComponent,
        MenuToggleDirective,
    ],
})
export class HeaderbarModule {}
