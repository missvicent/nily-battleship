import { Component, OnInit } from '@angular/core';
import { TurnService } from 'src/app/core/services/turn/turn.service';
import { IList } from 'src/app/shared/models/options';

@Component({
  selector: 'app-list',
  templateUrl: './player-score.component.html',
  styleUrls: ['./player-score.component.scss'],
})
export class PlayerScoreComponent implements OnInit {
  gameList: IList[];
  constructor(private turnService: TurnService) {}

  ngOnInit(): void {
    this.gameList = this.turnService.getGameList();
  }
}
