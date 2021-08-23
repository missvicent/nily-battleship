import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TurnService } from 'src/app/core/services/turn.service';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss'],
})
export class GameOverComponent {

  constructor(private router: Router, private turnService: TurnService) {}

  onClick(page: string): void {
    this.turnService.initialTurns = 0;
    this.turnService.infinitiveTurns = false;
    this.turnService.configSelected = false;
    this.router.navigateByUrl(`/${page}`);
  }
}
