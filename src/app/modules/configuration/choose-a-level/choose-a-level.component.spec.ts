import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';

import { ChooseALevelComponent } from './choose-a-level.component';

describe('ChooseALevelComponent', () => {
  let component: ChooseALevelComponent;
  let fixture: ComponentFixture<ChooseALevelComponent>;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChooseALevelComponent],
      imports: [MatRadioModule],
      providers: [{ provide: Router, useValue: mockRouter }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseALevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
