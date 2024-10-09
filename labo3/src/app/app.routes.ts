import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { IndexComponent } from './index/index.component';

export const routes: Routes = [
    {path:"", redirectTo:"/index", pathMatch:"full"},
    {path:"index", component:IndexComponent},
    {path:"list", component:ListComponent},
    {path:"details/:name", component:DetailsComponent},
    {path:"details", component:DetailsComponent}
];
