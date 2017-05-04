import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourcePage } from "./resource.page";

const DEFAULT_RESOURCE_ID = '0';

const routes: Routes = [
    { path: '', redirectTo: DEFAULT_RESOURCE_ID, pathMatch: 'full' },
    { path: ':resourceId', component: ResourcePage },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
