import { GameData } from '../interfaces/twitch.interface';

import { filterFirst5 } from '../utils/arrays.util';

const MOCK_RESPONSE = { "data": [{ "id": "516575", "name": "VALORANT", "box_art_url": "https://static-cdn.jtvnw.net/ttv-boxart/VALORANT-{width}x{height}.jpg" }, { "id": "21779", "name": "League of Legends", "box_art_url": "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-{width}x{height}.jpg" }, { "id": "509658", "name": "Just Chatting", "box_art_url": "https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-{width}x{height}.jpg" }, { "id": "29595", "name": "Dota 2", "box_art_url": "https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-{width}x{height}.jpg" }, { "id": "33214", "name": "Fortnite", "box_art_url": "https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-{width}x{height}.jpg" }, { "id": "32399", "name": "Counter-Strike: Global Offensive", "box_art_url": "https://static-cdn.jtvnw.net/ttv-boxart/./Counter-Strike:%20Global%20Offensive-{width}x{height}.jpg" }, { "id": "32982", "name": "Grand Theft Auto V", "box_art_url": "https://static-cdn.jtvnw.net/ttv-boxart/Grand%20Theft%20Auto%20V-{width}x{height}.jpg" }, { "id": "512710", "name": "Call of Duty: Modern Warfare", "box_art_url": "https://static-cdn.jtvnw.net/ttv-boxart/./Call%20of%20Duty:%20Modern%20Warfare-{width}x{height}.jpg" }, { "id": "138585", "name": "Hearthstone", "box_art_url": "https://static-cdn.jtvnw.net/ttv-boxart/Hearthstone-{width}x{height}.jpg" }, { "id": "493057", "name": "PLAYERUNKNOWN'S BATTLEGROUNDS", "box_art_url": "https://static-cdn.jtvnw.net/ttv-boxart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-{width}x{height}.jpg" }, { "id": "18122", "name": "World of Warcraft", "box_art_url": "https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-{width}x{height}.jpg" }, { "id": "512804", "name": "FIFA 20", "box_art_url": "https://static-cdn.jtvnw.net/ttv-boxart/FIFA%2020-{width}x{height}.jpg" }, { "id": "513143", "name": "Teamfight Tactics", "box_art_url": "https://static-cdn.jtvnw.net/ttv-boxart/Teamfight%20Tactics-{width}x{height}.jpg" }, { "id": "27471", "name": "Minecraft", "box_art_url": "https://static-cdn.jtvnw.net/ttv-boxart/Minecraft-{width}x{height}.jpg" }, { "id": "498566", "name": "Slots", "box_art_url": "https://static-cdn.jtvnw.net/ttv-boxart/Slots-{width}x{height}.jpg" }, { "id": "488552", "name": "Overwatch", "box_art_url": "https://static-cdn.jtvnw.net/ttv-boxart/Overwatch-{width}x{height}.jpg" }, { "id": "511224", "name": "Apex Legends", "box_art_url": "https://static-cdn.jtvnw.net/ttv-boxart/Apex%20Legends-{width}x{height}.jpg" }, { "id": "490359", "name": "Final Fantasy VII Remake", "box_art_url": "https://static-cdn.jtvnw.net/ttv-boxart/Final%20Fantasy%20VII%20Remake-{width}x{height}.jpg" }, { "id": "491931", "name": "Escape From Tarkov", "box_art_url": "https://static-cdn.jtvnw.net/ttv-boxart/Escape%20From%20Tarkov-{width}x{height}.jpg" }], "pagination": { "cursor": "eyJzIjoyMCwiZCI6ZmFsc2UsInQiOnRydWV9" } }
const USE_MOCK = true;

export class TwitchGamesService {
  // Features:
  // Make requests on my behalf to the Twitch API for top games
  // Filter top 5 games
  // Emit new results to subscribed components
  HEADERS = new Headers({ 'Client-ID': 'phiqc6fyql6xrdiib7188swave9omm' });
  fetchTopGames = async (): Promise<GameData[]> => {
    if (USE_MOCK) {
      const filteredMockData = filterFirst5(MOCK_RESPONSE.data);
      const withTransformedImages = this.transformImageLinks(filteredMockData);
      return withTransformedImages;
    }
    try {
      const response = await fetch('https://api.twitch.tv/helix/games/top', { headers: this.HEADERS });
      const data = await response.json();
      const first5 = <GameData[]>filterFirst5(data.data);
      const withTransformedImages = this.transformImageLinks(first5);
      return withTransformedImages;
    } catch (e) {
      console.log(e);
    }
  }
  transformImageLinks = (games: GameData[]): GameData[] => {
    return games.map((game) => {
      const transformedGame = Object.assign({}, game);
      transformedGame.box_art_url = transformedGame.box_art_url.replace('{width}', '143');
      transformedGame.box_art_url = transformedGame.box_art_url.replace('{height}', '190');
      return transformedGame;
    });
  }
}
