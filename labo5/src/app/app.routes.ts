import { Routes } from '@angular/router';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';
import { BalloonMapComponent } from './balloon-map/balloon-map.component';
import { PlumbingComponent } from './plumbing/plumbing.component';

export const routes: Routes = [
    {path:"", redirectTo:"/youtube", pathMatch:"full"},
    {path:"youtube", component:YoutubeSearchComponent},
    {path:"balloonMap", component:BalloonMapComponent},
    {path:"plumbing", component:PlumbingComponent}
];
