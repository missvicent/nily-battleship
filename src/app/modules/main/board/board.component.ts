import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BoardService } from 'src/app/core/services/board/board.service';
import { EdgeService } from 'src/app/core/services/edge/edge.service';
import { GeneratorService } from 'src/app/core/services/generator/generator.service';
import { HelperService } from 'src/app/core/services/helper/helper.service';
import { TurnService } from 'src/app/core/services/turn/turn.service';
import { NotificationComponent } from 'src/app/shared/components/notification/notification.component';
import { IBoard, ITile } from 'src/app/shared/models/board';
import { IGameData } from 'src/app/shared/models/options';
import { IShip } from 'src/app/shared/models/ships';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @Input() board: IBoard;
  @Output() gameData = new EventEmitter<IGameData>();

  gameOver = false;
  size = 10;
  ships = [];
  score = 0;
  turns = 0;
  turnsCounter = 0;
  unlimitedTurns = false;

  constructor(
    private _snackBar: MatSnackBar,
    private edgeService: EdgeService,
    private generatorService: GeneratorService,
    private helperService: HelperService,
    private boardService: BoardService,
    private turnService: TurnService
  ) {}

  ngOnInit(): void {
    this.boardService.createBoard(10);
    this.edgeService.setEdges(this.boardService.board);
    this.createShips();
    this.ships = this.boardService.ships;
    this.turns = this.turnService.initialTurns;
    this.turnsCounter = this.turns;
    this.unlimitedTurns = this.turnService.infinitiveTurns;
  }

  createShips(): void {
    while (this.size > 0) {
      this.boardService.placeShips(this.size);
      this.size -= 1;
    }
  }

  destroyShip(ship: IShip): boolean {
    return ship.hit === ship.size;
  }

  emitGameData(): void {
    const shipsAlive = this.ships.filter((elem) => elem.destroyed === false);
    const win = shipsAlive.length === 0;
    this.gameOver = this.isGameOver(shipsAlive);
    this.score = this.ships.filter((ship) => ship.destroyed === true).length;
    const gameData = this.helperService.formatGameData(win, this.gameOver, shipsAlive.length);
    this.gameData.emit(gameData);
  }

  getLetter(value: number): string {
    return this.generatorService.getLetter(value).toUpperCase();
  }

  isGameOver(ships: IShip[]): boolean {
    return ships.length === 0 || this.turnsCounter === 0;
  }

  onClick(tile: ITile, col: number, row: number): void {
    this.turnsCounter -= 1;
    this.board[col][row].status = 'hit';
    const shipHitId = this.ships.findIndex((arr) => arr.tiles.includes(tile));
    this.updateShipInfo(shipHitId, col, row);
    this.showMsg(this.ships[shipHitId], shipHitId);
    this.emitGameData();
  }

  openSnackBar(message: string, type: string) {
    this._snackBar.openFromComponent(NotificationComponent, {
      duration: 300,
      data: message,
      direction: 'ltr',
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: [type],
    });
  }

  showMsg(ship: IShip, hit: number): void {
    const msg = this.helperService.getHitMsg(ship, hit);
    const type = this.helperService.getMsgStyle(msg);
    this.openSnackBar(msg, type);
  }

  updateShipInfo(shipHitId: number, col: number, row: number): void {
    if (shipHitId !== -1 && !this.board[col][row].destroyed) {
      this.ships[shipHitId].hit += 1;
      this.ships[shipHitId].destroyed = this.destroyShip(this.ships[shipHitId]);
    }
  }
}
