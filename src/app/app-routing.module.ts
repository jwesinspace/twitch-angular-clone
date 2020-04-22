import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StreamersComponent } from './components/streamers/streamers.component';
import { GamesComponent } from './components/games/games.component';
import { ChannelComponent } from './components/channel/channel.component';


const routes: Routes = [
  { path: '', redirectTo: 'games', pathMatch: 'full' },
  { path: 'games', component: GamesComponent },
  { path: 'games/:gameId', component: StreamersComponent },
  { path: 'games/:gameId/:channelName', component: ChannelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
