export interface IOptions {
  name?: string;
  value?: number;
}

export interface IList {
  turns: string;
  date: string;
  win: boolean;
}

export interface IGameData {
  win: boolean;
  gameover: boolean;
  score: number;
}
