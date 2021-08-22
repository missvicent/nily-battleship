import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [CommonModule, MatButtonModule, MatInputModule],
})
export class WelcomeModule {}
