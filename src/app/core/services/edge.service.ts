import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { IBoard } from 'src/app/shared/models/board';

@Injectable({
  providedIn: 'root',
})
export class EdgeService {
  horizontalEdges = [];
  verticalEdges = [];

  checkEdgeAndSize(isOnEdge: number, shipSize: number): boolean {
    return isOnEdge === 0 && shipSize > 1;
  }

  getVerticalEdge(board: IBoard[]): IBoard[] {
    return _.cloneDeep(board).map((tiles: any) => {
      return tiles.filter((tile: IBoard) => tile.row === 'J')[0];
    });
  }
  getHorizontalEdge(board: IBoard[]): any {
    return _.cloneDeep(board.slice(-1)[0]);
  }

  selectedEdge(orientation: boolean, board: IBoard[]): IBoard[] {
    return (orientation && this.getHorizontalEdge(board)) || this.getVerticalEdge(board);
  }

  setEdges(board: IBoard[]): void {
    this.horizontalEdges = this.selectedEdge(true, board);
    this.verticalEdges = this.selectedEdge(false, board);
  }
}
