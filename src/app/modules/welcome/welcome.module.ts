import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [CommonModule, SharedModule],
})
export class WelcomeModule {}
