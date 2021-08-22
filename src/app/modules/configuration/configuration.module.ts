import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationComponent } from '../configuration/configuration.component';
import { EnterTurnsComponent } from '../configuration/enter-turns/enter-turns.component';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChooseALevelComponent } from './choose-a-level/choose-a-level.component';

@NgModule({
  declarations: [ConfigurationComponent, EnterTurnsComponent, ChooseALevelComponent],
  imports: [CommonModule, SharedModule, ConfigurationRoutingModule],
})
export class ConfigurationModule {}
