import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { PlayerDetailComponent } from './players/player-detail/player-detail.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'players', component: PlayerListComponent },
            { path: 'players/:id', component: PlayerDetailComponent },
            { path: 'messages', component: MessagesComponent },
            { path: 'lists', component: ListsComponent }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
