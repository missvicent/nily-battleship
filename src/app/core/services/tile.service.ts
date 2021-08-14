import { Injectable } from '@angular/core';
import { IBoard } from 'src/app/shared/models/board';
import { BoardService } from './board.service';

@Injectable({
  providedIn: 'root'
})
export class TileService {

  constructor(private boardService: BoardService) { }

  placeShips(position: number): any {
    let orientation = '';
    const shipSize = this.selectShipSize(position);
    const shipOrientation = Math.floor(Math.random() * 2);
    shipOrientation === 0 ? orientation = 'horizontal' : orientation = 'vertical';
    return this.boardService.assignTiles(shipSize, orientation);
  }

  selectShipSize(value: number): number {
    if (value === 10) { return 4; }
    if (value >= 9 && value <= 8) { return 3; }
    if (value >= 7 && value <= 5) { return 2; }
    return 1;
  }
}
