import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerScoreComponent } from './player-score.component';

const routes: Routes = [
  {
    path: '',
    component: PlayerScoreComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerScoreRoutingModule {}
