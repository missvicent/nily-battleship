import { Injectable } from '@angular/core';
import { IList } from 'src/app/shared/models/options';

@Injectable({
  providedIn: 'root',
})
export class TurnService {
  configSelected = false;
  initialTurns = 0;
  infinitiveTurns = false;
  gameList: IList[] = [];
  score: number;

  addGameToList(game: IList): void {
    this.gameList.push(game);
  }

  doesTheUserSelectAGameConfig(): boolean {
    return this.configSelected;
  }

  getScore(): number {
    return this.score;
  }

  getGameList(): IList[] {
    return this.gameList;
  }

  setInitialTurns(turns: number): void {
    this.initialTurns = turns;
  }

  setInfinitiveTurns(value: boolean): void {
    this.infinitiveTurns = value;
  }
}
