import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameGuard } from './core/guards/game.guard';
import { WelcomeComponent } from './modules/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'configuration',
    loadChildren: () => import('./modules/configuration/configuration.module').then((m) => m.ConfigurationModule),
  },
  {
    path: 'score',
    loadChildren: () => import('./modules/player-score/player-score.module').then((m) => m.PlayerScoreModule),
  },
  {
    path: 'play',
    loadChildren: () => import('./modules/play/play.module').then((m) => m.PlayModule),
    canActivate: [GameGuard],
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
