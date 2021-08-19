import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { BoardService } from './core/services/board.service';
import { EdgeService } from './core/services/edge.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'nily-battleship';
  size = 10;
  constructor(private boardService: BoardService, private edgeService: EdgeService) {}

  ngOnInit(): void {
    this.boardService.createBoard(10);
    this.edgeService.setEdges(this.boardService.board);
    this.createShips();

    console.log(this.boardService.board);
    console.log(this.boardService.ships);
  }

  createShips(): void {
    while (this.size > 0) {
      this.boardService.placeShips(this.size);
      this.size -= 1;
    }
  }
}
