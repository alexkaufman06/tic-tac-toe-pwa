import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <h2>{{ value }}</h2>
  `,
  styles: []
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
}
