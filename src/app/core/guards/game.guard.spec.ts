import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { TurnService } from '../services/turn/turn.service';

import { GameGuard } from './game.guard';

describe('GameGuard', () => {
  let guard: GameGuard;
  let turnService: TurnService;
  let mockRouter = {
    navigateByUrl: jasmine.createSpy('navigateByUrl')
  };
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: mockRouter }
      ]
    });
    guard = TestBed.inject(GameGuard);
    turnService = TestBed.inject(TurnService)

  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should navigate to base path if there is any config selected', () => {
    const configSelcted = false;
    guard.canActivate();
    expect(configSelcted).toBeFalsy();
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/');
  });

  it('should return true if there is a config selected', () => {
    const configSelcted = true;
    guard.canActivate();
    expect(configSelcted).toBeTruthy();
    expect(guard.canActivate).toBeTruthy();
  });
});
