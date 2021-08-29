import { Component, OnInit } from '@angular/core';
import { TurnService } from 'src/app/core/services/turn/turn.service';
import { IList } from 'src/app/shared/models/options';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  gameList: IList[];
  constructor(private turnService: TurnService) {}

  ngOnInit(): void {
    this.gameList = this.turnService.getGameList();
  }
}
