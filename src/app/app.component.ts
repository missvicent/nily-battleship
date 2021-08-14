import { Component } from '@angular/core';
import { BoardService } from './core/services/board.service';
import { EdgeService } from './core/services/edge.service';
import { TileService } from './core/services/tile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nily-battleship';
  size = 10;

  constructor(
    private boardService: BoardService, 
    private tileService: TileService,
    private edgeService: EdgeService) {
    this.boardService.createBoard(10);
    this.createShips();
  }

  createShips(): void {
    while(this.size > 0) {
      this.tileService.placeShips(this.size);
      this.size -= 1;
    }
  }
}
