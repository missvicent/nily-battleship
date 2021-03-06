import { Component, Input, OnInit } from '@angular/core';
import { TurnService } from 'src/app/core/services/turn/turn.service';
import { DatePipe } from '@angular/common';
import { IGameData } from 'src/app/shared/models/options';
import { BoardService } from 'src/app/core/services/board/board.service';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss'],
  providers: [DatePipe],
})
export class GameOverComponent implements OnInit {
  @Input() gameData: IGameData;

  constructor(private turnService: TurnService, private datePipe: DatePipe, private boardService: BoardService) {}

  ngOnInit(): void {
    const newDate = new Date();
    this.addGameToList(
      newDate,
      this.gameData?.win,
      this.turnService.infinitiveTurns,
      this.turnService.initialTurns,
      this.gameData?.score
    );
    this.turnService.initialTurns = 0;
    this.turnService.infinitiveTurns = false;
    this.turnService.configSelected = false;
    this.boardService.ships = [];
  }

  addGameToList(date: Date, win: boolean, infinitiveTurns: boolean, initialTurns: number, score: number): void {
    const game = {
      turns: infinitiveTurns ? 'Unlimited' : `${initialTurns}`,
      date: this.datePipe.transform(date, 'yyyy-MM-dd'),
      win,
      score,
    };
    this.turnService.addGameToList(game);
  }
}
