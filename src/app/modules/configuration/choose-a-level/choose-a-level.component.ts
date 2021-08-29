import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LEVEL_OPTIONS } from 'src/app/core/mocks/options';
import { TurnService } from 'src/app/core/services/turn/turn.service';

@Component({
  selector: 'app-choose-a-level',
  templateUrl: './choose-a-level.component.html',
  styleUrls: ['./choose-a-level.component.scss'],
})
export class ChooseALevelComponent {
  options = LEVEL_OPTIONS;
  optionSelected = false;

  constructor(private turnService: TurnService, private router: Router) {}

  onClick(): void {
    this.turnService.configSelected = true;
    this.router.navigateByUrl('/play');
  }

  onChange(value: string): void {
    if (value === '0') {
      this.turnService.setInfinitiveTurns(true);
    }
    this.turnService.setInitialTurns(parseInt(value, 10));
    this.optionSelected = true;
  }
}
