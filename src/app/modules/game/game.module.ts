import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameOverComponent } from './game-over/game-over.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [GameOverComponent, ListComponent],
  imports: [CommonModule, GameRoutingModule, SharedModule],
})
export class GameModule {}
