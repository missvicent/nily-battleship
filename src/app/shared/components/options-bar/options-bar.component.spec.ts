import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared.module';
import { PlayButtonComponent } from '../play-button/play-button.component';

import { OptionsBarComponent } from './options-bar.component';

describe('OptionsBarComponent', () => {
  let component: OptionsBarComponent;
  let fixture: ComponentFixture<OptionsBarComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ OptionsBarComponent, PlayButtonComponent ],
      imports: [
        MatToolbarModule, SharedModule
      ],
      providers: [
        { provide: Router, useValue: mockRouter }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
