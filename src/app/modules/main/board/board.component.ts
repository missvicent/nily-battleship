import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BoardService } from 'src/app/core/services/board.service';
import { EdgeService } from 'src/app/core/services/edge.service';
import { GeneratorService } from 'src/app/core/services/generator.service';
import { ShipService } from 'src/app/core/services/ship.service';
import { TurnService } from 'src/app/core/services/turn.service';
import { NotificationComponent } from 'src/app/shared/components/notification/notification.component';
import { IBoard, ITile } from 'src/app/shared/models/board';
import { IShip } from 'src/app/shared/models/ships';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @Input() board: IBoard;
  @Output() gameIsOver = new EventEmitter<boolean>();
  
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
    private boardService: BoardService,
    private turnService: TurnService,
    private shipService: ShipService
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

  getLetter(value: number): string {
    return this.generatorService.getLetter(value).toUpperCase();
  }

  isGameOver(ships: IShip[]): boolean {
    return ships.length === 0 || this.turnsCounter === 0;
  }

  onClick(tile: ITile, col: number, row: number): void {
    this.board[col][row].status = 'hit';
    const shipHitId = this.ships.findIndex((arr) => arr.tiles.includes(tile));
    this.updateShipInfo(shipHitId, col, row);
    this.turnsCounter -= 1;
    this.score = this.ships.filter((ship) => ship.destroyed === true).length;
    const shipsAlive = this.ships.filter((elem) => elem.destroyed === false);
    this.showMsg(this.ships[shipHitId], shipHitId);
    this.gameOver = this.isGameOver(shipsAlive);
    this.gameIsOver.emit(this.gameOver);
  }

  openSnackBar(message: string, type: string) {
    this._snackBar.openFromComponent(NotificationComponent, {
      duration: 2 * 1000,
      data: message,
      direction: 'ltr',
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: [type],
    });
  }

  showMsg(ship: IShip, hit: number): void {
    const msg = this.shipService.getHitMsg(ship, hit);
    const type = this.shipService.getMsgStyle(msg);
    this.openSnackBar(msg, type);
  }

  updateShipInfo(shipHitId: number, col: number, row: number): void {
    if (shipHitId !== -1 && !this.board[col][row].destroyed) {
      this.ships[shipHitId].hit += 1;
      this.ships[shipHitId].destroyed = this.destroyShip(this.ships[shipHitId]);
    }
  }
}
