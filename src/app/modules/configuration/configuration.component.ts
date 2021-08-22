import { Component } from '@angular/core';
import { GAME_OPTIONS } from 'src/app/core/mocks/options';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
})
export class ConfigurationComponent {
  options = GAME_OPTIONS;
  customConfig = '';

  constructor() {}

  onChange(value: string): void {
    this.customConfig = value;
  }
}
