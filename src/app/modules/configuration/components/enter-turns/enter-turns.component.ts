import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TurnService } from 'src/app/core/services/turn/turn.service';

@Component({
  selector: 'app-enter-turns',
  templateUrl: './enter-turns.component.html',
  styleUrls: ['./enter-turns.component.scss'],
})
export class EnterTurnsComponent {
  turns = 0;

  constructor(private router: Router, private turnService: TurnService) {}

  onClick(): void {
    this.turnService.setInitialTurns(this.turns);
    this.turnService.configSelected = true;
    this.turnService.infinitiveTurns = false;
    this.router.navigateByUrl('/play');
  }

  shouldItBeDisabled(errors: any): boolean {
    return errors || this.turns <= 0 || this.turns.toString().charAt(0) === '0';
  }
}
