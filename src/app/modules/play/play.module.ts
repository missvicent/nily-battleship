import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayComponent } from './play.component';
import { BoardComponent } from './board/board.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ScoreComponent } from './board/components/score/score.component';
import { GameOverComponent } from './game-over/game-over.component';
import { PlayRoutingModule } from './play-routing.module';

@NgModule({
  declarations: [PlayComponent, BoardComponent, ScoreComponent, GameOverComponent],
  imports: [CommonModule, SharedModule, PlayRoutingModule],
})
export class PlayModule {}
