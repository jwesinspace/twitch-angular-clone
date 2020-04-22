import { StreamData } from '../interfaces/twitch.interface';

import { filterFirst5 } from '../utils/arrays.util';
import { Injectable } from '@angular/core';

export class TwitchStreamersService {
  HEADERS = new Headers({ 'Client-ID': 'phiqc6fyql6xrdiib7188swave9omm' });
  fetchTopStreams = async (gameId: string): Promise<StreamData[]> => {
    try {
      const response = await fetch(`https://api.twitch.tv/helix/streams?game_id=${gameId}`, { headers: this.HEADERS });
      const data = await response.json();
      const first5 = <StreamData[]>filterFirst5(data.data);
      const withTransformedImages = this.transformImageLinks(first5);
      return withTransformedImages;
    } catch (e) {
      console.log(e);
    }
  }
  transformImageLinks = (streams: StreamData[]): StreamData[] => {
    return streams.map((stream) => {
      const transformedStream = Object.assign({}, stream);
      transformedStream.thumbnail_url = transformedStream.thumbnail_url.replace('{width}', '200');
      transformedStream.thumbnail_url = transformedStream.thumbnail_url.replace('{height}', '124');
      return transformedStream;
    });
  }
}
