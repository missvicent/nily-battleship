import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameOverComponent } from './game-over/game-over.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'game-over',
    component: GameOverComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule {}
