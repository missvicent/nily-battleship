import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameOverComponent } from './game-over/game-over.component';
import { GameListComponent } from './game-list/game-list.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    GameOverComponent,
    GameListComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
