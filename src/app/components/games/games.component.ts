import { Component, OnInit } from '@angular/core';
import { TwitchGamesService } from 'src/app/services/twitch-games.service';
import { GameData } from 'src/app/interfaces/twitch.interface';
import { TwitchStreamersService } from 'src/app/services/twitch-streamers.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  games: GameData[];
  constructor(private twitchGamesService: TwitchGamesService) { }

  ngOnInit() {
    this.twitchGamesService.fetchTopGames()
      .then((data) => {
        this.games = data;
      });
  }
}
