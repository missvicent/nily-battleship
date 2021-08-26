import { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TurnService } from 'src/app/core/services/turn/turn.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  @Input() ships = 0;
  @Input() remaining = 0;
  @Input() turns = 0;
  @Input() score = 0;

  unlimitedTurns = false;

  constructor(private router: Router, private turnService: TurnService) {}

  ngOnInit(): void {
    this.unlimitedTurns = this.turnService.infinitiveTurns;
  }
}
