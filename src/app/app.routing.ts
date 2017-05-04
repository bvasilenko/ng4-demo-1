import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

const routes: Routes = [
    { path: '', redirectTo: 'resource', pathMatch: 'full' },

    // it is going to be resource/{resourceId}
    { path: 'resource', loadChildren: 'app/resources/resources.module#ResourcesModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
