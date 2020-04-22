import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare const Twitch: any;

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  channelName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.channelName = this.route.snapshot.params['channelName'];
    console.log(this.channelName);
    new Twitch.Embed("twitch-embed", {
      width: '100%',
      height: 480,
      channel: this.channelName,
      theme: 'dark',
      layout: 'video'
    });
  }
}
