import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ErrorMsgComponent } from './components/error-msg/error-msg.component';
import { NotificationComponent } from './components/notification/notification.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PlayButtonComponent } from './components/play-button/play-button.component';
import { OptionsBarComponent } from './components/options-bar/options-bar.component';

const MODULES = [
  CommonModule,
  FlexLayoutModule,
  MatFormFieldModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatButtonModule,
  MatRadioModule,
  MatSnackBarModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [ErrorMsgComponent, NotificationComponent, PlayButtonComponent, OptionsBarComponent],
  imports: MODULES,
  exports: [
    CommonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatSnackBarModule,
    MatToolbarModule,
    ErrorMsgComponent,
    PlayButtonComponent,
    OptionsBarComponent,
  ],
})
export class SharedModule {}
