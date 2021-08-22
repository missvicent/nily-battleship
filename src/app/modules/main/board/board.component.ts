import { Component, Input, OnInit } from '@angular/core';
import { BoardService } from 'src/app/core/services/board.service';
import { GeneratorService } from 'src/app/core/services/generator.service';
import { TurnService } from 'src/app/core/services/turn.service';
import { IBoard, ITile } from 'src/app/shared/models/board';
import { IShip } from 'src/app/shared/models/ships';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  
  @Input() board: IBoard;
  ships = [];
  score = 0;
  turns = 0;
  turnsCounter = 0;

  constructor(private generatorService: GeneratorService, private boardService: BoardService, private turnService: TurnService) {}

  ngOnInit(): void {
    this.ships = this.boardService.ships;
    this.turns = this.turnService.initialTurns;
    this.turnsCounter = this.turns;
  }

  getLetter(value: number):string {
    return this.generatorService.getLetter(value).toUpperCase();
  }

  onClick(tile: ITile, col: number, row: number): void {
    if (this.board[col][row].status !== 'hit' ) {
      this.board[col][row].status = 'hit';
      const shipHitId = this.ships.findIndex(arr => arr.tiles.includes(tile));
      this.updateShipInfo(shipHitId, col, row);
      this.turnsCounter -= 1;
      this.score = (this.ships.filter(ship => ship.destroyed === true)).length;
    }
  }

  updateShipInfo(shipHitId: number, col: number, row: number): void {
    if (shipHitId !== -1 && !this.board[col][row].destroyed) {
      this.ships[shipHitId].hit += 1;
      this.ships[shipHitId].destroyed = this.destroyShip(this.ships[shipHitId]);
    }
  }

  destroyShip(ship: IShip): boolean {
    return ship.hit === ship.size;
  }
}
