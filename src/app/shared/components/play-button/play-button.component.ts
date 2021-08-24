import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.scss'],
})
export class PlayButtonComponent {
  @Input() color = 'accent';
  @Input() effect = false;
  @Input() link = '';
  @Input() text = '';

  constructor(private router: Router) {}

  onClick(): void {
    this.router.navigateByUrl(`${this.link}`);
  }
}
