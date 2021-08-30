import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerScoreComponent } from './player-score.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlayerScoreRoutingModule } from './player-score-routing.module';

@NgModule({
  declarations: [PlayerScoreComponent],
  imports: [CommonModule, PlayerScoreRoutingModule, SharedModule],
})
export class PlayerScoreModule {}
