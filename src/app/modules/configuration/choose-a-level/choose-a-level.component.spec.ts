import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseALevelComponent } from './choose-a-level.component';

describe('ChooseALevelComponent', () => {
  let component: ChooseALevelComponent;
  let fixture: ComponentFixture<ChooseALevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChooseALevelComponent],
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
