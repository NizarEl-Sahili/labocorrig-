import { Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';

export const routes: Routes = [
    { path: "", redirectTo: '/list', pathMatch: 'full' },
    { path: "favorites", component: FavoritesComponent },
    { path: "list", component: ListComponent },
    { path: "single/:name", component: SingleComponent },
];
