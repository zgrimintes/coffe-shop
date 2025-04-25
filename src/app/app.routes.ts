import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./_Components/home/home.component').then(m => m.HomeComponent)}, 
    {
        path: "**", redirectTo: ''
    }
];
