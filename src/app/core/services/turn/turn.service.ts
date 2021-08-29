import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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

  setInitialTurns(turns: number): void {
    this.initialTurns = turns;
  }

  setInfinitiveTurns(value: boolean): void {
    this.infinitiveTurns = value;
  }

  getScore(): number {
    return this.score;
  }

  doesTheUserSelectAGameConfig(): boolean {
    return this.configSelected;
  }

  addGameToList(game: IList): void {
    this.gameList.push(game);
  }

  getGameList(): IList[] {
    return this.gameList;
  }
}
