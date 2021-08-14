import { Injectable } from '@angular/core';
import { IBoard } from 'src/app/shared/models/board';
import { IShip } from 'src/app/shared/models/ships';
import { EdgeService } from './edge.service';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  board = [];
  locations: any = [];
  numShips = 10;
  ships: IShip[] = [];
  horizontalEge = [];
  verticalEdge = [];

  constructor(private edgeService: EdgeService) {}

  assignTiles(shipSize: number, orientation: string): void {
    this.chooseTile(orientation, shipSize);
  }

  chooseTile(orientation: string, shipSize: number): void {
    const letter = (this.selectRandomRow()).toUpperCase();
    const col = this.selectRandomColumn();
    const row = this.board[col].findIndex((element: any) => element.row === letter);
    this.checkCollision(col, row, shipSize, orientation);
  }


  checkCollision(col: number, row: number, shipSize: number, orientation: string): boolean {
    const tile = this.board[col][row].tile;
    const isOnEdge = this.edgeService.horizonatalEdge.find(elem => elem.tile = tile);
    console.log(isOnEdge, this.edgeService.horizonatalEdge);
    for (let i = 0; i < shipSize; i++) {
      if (this.board[col][row + 1].used || row + 1 > 9) {
        return true;
      }
    }
    return false;
  }

  checkHorizonatEdgeAndTile(col: number, row: number, shipSize: number, orientation: string) {
    console.log(row, col)
    if (orientation === 'vertical' && shipSize > 1) {
      
    }
  }

  checkHorizontalCollision(col: number, row: number, shipSize: number): boolean {
    let i = shipSize;
    while (i--) {
      if (this.board[col + 1][row].used) {
        return true;
      }
      return false;
    }
  }

  isAHorizontalEdge(shipSize: number, row: number, col: number): boolean {
    if (shipSize > 1) {

    }
    return true;
    // right todas laa linea a la derecha - horizontal && shipSize > 1
    // bottom toda la linea si es vertical && shipSize > 1
  }


  selectRandomRow(): string {
    return String.fromCharCode(97 + Math.floor(Math.random() * 10));
  }

  selectRandomColumn(): number {
    return Math.floor(Math.random() * 10);
  }

  createBoard(size: number = 10): void {
    const shipsNum = Array(size).fill([]);
    shipsNum.forEach((row, i) => {
      let tiles = [];
      shipsNum.forEach((col, j) => { 
        tiles[j] =  {
          row: String.fromCharCode(65 + j),
          status: '',
          tile: parseInt(`${i}${j}`),
          used: false,
        };
      });
      this.board[i] = tiles;
    });
    console.log(this.board)
  }

  getBoard(): IBoard[] {
    return this.board;
  }

}
