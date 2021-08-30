import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { OptionsBarComponent } from 'src/app/shared/components/options-bar/options-bar.component';
import { BoardComponent } from './board/board.component';

import { PlayComponent } from './play.component';

describe('MainComponent', () => {
  let component: PlayComponent;
  let fixture: ComponentFixture<PlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayComponent, BoardComponent, OptionsBarComponent],
      imports: [MatSnackBarModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
