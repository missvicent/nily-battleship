import { Injectable } from '@angular/core';
import { IBoard } from 'src/app/shared/models/board';

@Injectable({
  providedIn: 'root'
})
export class EdgeService {

  horizonatalEdge: IBoard[] = [];
  verticalEdge: IBoard[] = [];

  getVerticalEdge(board: IBoard[]): IBoard[] {
    return board.map((tiles: any) => {
      return tiles.filter((tile: IBoard) => tile.row === 'J')[0]
    });
  }
  getHorizontalEdge(board: IBoard[]): any {
    return board.slice(-1)[0];
  }

  setVerticalEdge(board: IBoard[]): void {
    this.verticalEdge = this.getVerticalEdge(board);
  }

  setHorizonalEdge(board: IBoard[]): void {
    this.horizonatalEdge =  this.getHorizontalEdge(board);
  }
}
