import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwitchGamesService } from './services/twitch-games.service';
import { GamesComponent } from './components/games/games.component';
import { StreamersComponent } from './components/streamers/streamers.component';
import { ChannelComponent } from './components/channel/channel.component';
import { TwitchStreamersService } from './services/twitch-streamers.service';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    StreamersComponent,
    ChannelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TwitchGamesService, TwitchStreamersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
