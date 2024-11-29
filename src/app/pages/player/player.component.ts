import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>player works!</p>`,
  styleUrls: ['./player.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerComponent { }
