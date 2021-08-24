import { Component } from '@angular/core';
import { TurnService } from 'src/app/core/services/turn.service';
import { IList } from 'src/app/shared/models/options';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  gameList: IList[];
  constructor(private turnService: TurnService) {}

  ngOnInit(): void {
    this.gameList = this.turnService.getGameList();
  }
}
