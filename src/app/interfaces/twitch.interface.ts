export interface GameData {
  id: string;
  name: string;
  box_art_url: string;
  viewers?: number;
};
export interface StreamData {
  id: string;
  user_id: string;
  user_name: string;
  game_id: string;
  type: string;
  title: string;
  viewer_count: number;
  started_at: string;
  language: string;
  thumbnail_url: string;
  tag_ids: string[];
}
