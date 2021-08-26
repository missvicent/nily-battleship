import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TurnService } from '../services/turn/turn.service';

@Injectable({
  providedIn: 'root',
})
export class GameGuard implements CanActivate {
  constructor(private turnService: TurnService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const configSelcted = this.turnService.doesTheUserSelectAGameConfig();
    if (!configSelcted) {
      this.router.navigateByUrl('/');
    }
    return configSelcted;
  }
}
