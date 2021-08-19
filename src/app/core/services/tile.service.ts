import { Injectable } from '@angular/core';
import { IBoard, ITile } from 'src/app/shared/models/board';
import { GeneratorService } from './generator.service';
import { ShipService } from './ship.service';

@Injectable({
  providedIn: 'root',
})
export class TileService {
  constructor(private generatorService: GeneratorService, private shipService: ShipService) {}

  checkIfTileIsInUse(board: IBoard[], orientation: boolean, shipSize: number, tile: ITile): boolean {
    return orientation
      ? this.checkHorizontalTiles(shipSize, tile, board)
      : this.checkVerticalTiles(shipSize, tile, board);
  }

  checkHorizontalTiles(shipSize: number, tile: ITile, board: IBoard[]): boolean {
    const ships = this.shipService.generateShips(shipSize);
    const taken = ships.filter((ship, i) => !board[tile.col][tile.row + i] || board[tile.col][tile.row + i]?.used);
    return taken.length > 0;
  }

  checkVerticalTiles(shipSize: number, tile: ITile, board: IBoard[]): boolean {
    const ships = this.shipService.generateShips(shipSize);
    const taken = ships.filter((ship, i) => !board[tile.col + i] || board[tile.col + i][tile.row]?.used);
    return taken.length > 0;
  }

  chooseTile(board: Array<any>): ITile {
    const letter = this.generatorService.selectRandomRow().toUpperCase();
    const col = this.generatorService.selectRandomColumn();
    const row = board[col].findIndex((element: any) => element.row === letter);
    return { col, letter, row };
  }
}
