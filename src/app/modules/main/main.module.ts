import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { BoardComponent } from './board/board.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ScoreComponent } from './board/components/score/score.component';
import { GameOverComponent } from './game-over/game-over.component';

@NgModule({
  declarations: [MainComponent, BoardComponent, ScoreComponent, GameOverComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule],
})
export class MainModule {}
