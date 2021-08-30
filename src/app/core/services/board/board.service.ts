import { Injectable } from '@angular/core';
import { ITile } from 'src/app/shared/models/board';
import { ShipService } from '../ship/ship.service';
import { TileService } from '../tile/tile.service';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  board = [];
  edges = [];
  ships = [];

  constructor(private shipService: ShipService, private tileService: TileService) {}

  createBoard(size = 10): void {
    const shipsNum = this.shipService.generateShips(size);
    shipsNum.forEach((row, i) => {
      const tiles = [];
      shipsNum.forEach((col, j) => {
        tiles[j] = {
          row: String.fromCharCode(65 + j),
          status: '',
          tile: parseInt(`${i}${j}`, 10),
          used: false,
        };
      });
      this.board[i] = tiles;
    });
  }

  assignBoardTiles(shipSize: number, orientation: boolean): any {
    const tile = this.tileService.chooseTile(this.board);
    const isThereACollision = this.shipService.checkCollision(this.board, shipSize, orientation, tile);
    const isTileInUse = this.tileService.checkIfTileIsInUse(this.board, orientation, shipSize, tile);
    if (!isThereACollision && !isTileInUse) {
      return this.placeShipsOnTheBoard(shipSize, tile, orientation);
    }
    return this.assignBoardTiles(shipSize, !orientation);
  }

  placeShips(position: number): any {
    const shipSize = this.shipService.selectShipSize(position);
    const shipOrientation = Math.floor(Math.random() * 2);
    return this.assignBoardTiles(shipSize, !!shipOrientation);
  }

  placeShipsOnTheBoard(shipSize: number, tile: ITile, orientation: boolean): void {
    const places = this.shipService.generateShips(shipSize);
    const tiles = [];
    places.forEach((place, i) => {
      if (orientation) {
        this.board[tile.col][tile.row + i].used = true;
        tiles.push(this.board[tile.col][tile.row + i]);
      } else {
        this.board[tile.col + i][tile.row].used = true;
        tiles.push(this.board[tile.col + i][tile.row]);
      }
    });
    const ship = this.shipService.createShip(tiles, places.length);
    this.ships.push(ship);
  }
}
