import { Injectable } from '@angular/core';
import { IBoard, ITile } from 'src/app/shared/models/board';
import * as _ from 'lodash';
import { IShip } from 'src/app/shared/models/ships';
import { SHIPS_NAMES } from '../../mocks/ships';
import { EdgeService } from '../edge/edge.service';

@Injectable({
  providedIn: 'root',
})
export class ShipService {
  constructor(private edgeService: EdgeService) {}
  checkCollision(board: IBoard[], shipSize: number, orientation: boolean, tile: ITile): boolean {
    const position = board[tile.col][tile.row].tile;
    const edges = orientation ? this.edgeService.horizontalEdges : this.edgeService.verticalEdges;
    const isOnEdge = _.cloneDeep(edges).findIndex((elem) => {
      elem.tile = position;
    });
    return this.edgeService.checkEdgeAndSize(isOnEdge, shipSize);
  }

  createShip(tiles: IBoard[], size: number): IShip {
    return {
      hit: 0,
      name: this.getShipName(size - 1),
      size,
      destroyed: false,
      tiles,
    };
  }

  generateShips(shipSize: number): Array<number> {
    return Array(shipSize).fill(0);
  }

  getShipName(size: number): string {
    return SHIPS_NAMES[size];
  }

  selectShipSize(value: number): number {
    if (value >= 10) {
      return 4;
    }
    if (value >= 8 && value <= 9) {
      return 3;
    }
    if (value >= 5 && value <= 7) {
      return 2;
    }
    return 1;
  }
}
