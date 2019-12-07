import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button class="square" nbButton *ngIf="!value">{{ value }}</button>
    <button class="sqaure" nbButton hero statue="success" *ngIf="value == 'X'">{{ value }}</button>
    <button class="sqaure" nbButton hero statue="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['./square.component.scss']
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
}
