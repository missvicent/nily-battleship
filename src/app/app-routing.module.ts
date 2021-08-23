import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameGuard } from './core/guards/game.guard';
import { WelcomeComponent } from './modules/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'configuration',
    loadChildren: () => import('./modules/configuration/configuration.module').then((m) => m.ConfigurationModule),
  },
  {
    path: 'game',
    loadChildren: () => import('./modules/game/game.module').then((m) => m.GameModule),
    canActivate: [GameGuard],
  },
  {
    path: 'play',
    loadChildren: () => import('./modules/main/main.module').then((m) => m.MainModule),
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
