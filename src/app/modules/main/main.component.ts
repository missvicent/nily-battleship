import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/app/core/services/board.service';
import { IBoard } from 'src/app/shared/models/board';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  board: IBoard[];
  gameOver = false;

  constructor(private boardService: BoardService) {}

  ngOnInit(): void {
    this.board = this.boardService.board;
  }

  isGameOver(event: boolean): void {
    this.gameOver = event;
  }
}
