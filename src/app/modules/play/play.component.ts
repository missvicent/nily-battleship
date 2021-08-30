import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/app/core/services/board/board.service';
import { IBoard } from 'src/app/shared/models/board';
import { IGameData } from 'src/app/shared/models/options';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
})
export class PlayComponent implements OnInit {
  board: IBoard[];
  gameData: IGameData;

  constructor(private boardService: BoardService) {}

  ngOnInit(): void {
    this.board = this.boardService.board;
  }

  isGameOver(event: IGameData): void {
    this.gameData = event;
  }
}
