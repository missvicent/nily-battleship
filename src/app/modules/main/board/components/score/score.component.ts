import { SimpleChanges } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent {

  @Input() ships: number = 0;
  @Input() remaining: number = 0;
  @Input() turns: number = 0;
  @Input() score: number = 0;

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.remaining === 0) {
     this.router.navigateByUrl('/game/game-over');
    }
  }

}
