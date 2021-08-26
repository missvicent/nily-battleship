import { Injectable } from '@angular/core';
import { IGameData } from 'src/app/shared/models/options';
import { IShip } from 'src/app/shared/models/ships';
import { BoardService } from '../board/board.service';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private boardService: BoardService) {}

  formatGameData(win: boolean, gameover: boolean, shipsAlive: number): IGameData {
    return {
      win,
      gameover,
      score: this.boardService.ships.length - shipsAlive,
    };
  }

  getHitMsg(ship: IShip, hit: number): string {
    if (ship?.destroyed) {
      return `You destroyed a ${ship.name} 💀💀 !!!`;
    }
    if (hit > -1 && !ship.destroyed) {
      return `You hit a ship 💣 !!!`;
    }
    if (hit === -1) {
      return `You miss a shot 😔`;
    }
  }

  getMsgStyle(msg: string): string {
    if (msg.includes('hit')) {
      return `notification-hit`;
    }
    if (msg.includes('destroyed')) {
      return `notification-destroyed`;
    }
    return `notification-miss`;
  }
}
