import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { ErrorMsgComponent } from 'src/app/shared/components/error-msg/error-msg.component';

import { EnterTurnsComponent } from './enter-turns.component';

describe('EnterTurnsComponent', () => {
  let component: EnterTurnsComponent;
  let fixture: ComponentFixture<EnterTurnsComponent>;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate'),
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnterTurnsComponent, ErrorMsgComponent],
      imports: [FormsModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule],
      providers: [{ provide: Router, useValue: mockRouter }],
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
