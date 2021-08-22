import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterTurnsComponent } from './enter-turns.component';

describe('EnterTurnsComponent', () => {
  let component: EnterTurnsComponent;
  let fixture: ComponentFixture<EnterTurnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnterTurnsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterTurnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
