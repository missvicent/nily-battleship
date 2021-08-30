import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { PlayButtonComponent } from 'src/app/shared/components/play-button/play-button.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlayerScoreComponent } from './player-score.component';

describe('ListComponent', () => {
  let component: PlayerScoreComponent;
  let fixture: ComponentFixture<PlayerScoreComponent>;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [PlayerScoreComponent, PlayButtonComponent],
      imports: [SharedModule],
      providers: [{ provide: Router, useValue: mockRouter }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
