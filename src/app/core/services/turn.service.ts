import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TurnService {
  configSelected = false;
  initialTurns = 0;
  infinitiveTurns = false;
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
}
