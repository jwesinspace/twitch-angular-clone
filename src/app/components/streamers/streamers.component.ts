import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TwitchStreamersService } from 'src/app/services/twitch-streamers.service';

import { StreamData } from 'src/app/interfaces/twitch.interface';

@Component({
  selector: 'app-streamers',
  templateUrl: './streamers.component.html',
  styleUrls: ['./streamers.component.scss']
})
export class StreamersComponent implements OnInit {
  streams: StreamData[];

  constructor(
    private twitchStreamersService: TwitchStreamersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const gameId = this.route.snapshot.params['gameId'];
    const streams = this.twitchStreamersService.fetchTopStreams(gameId);
    streams.then((data) => this.streams = data).then(() => console.log(this.streams));
  }

}
