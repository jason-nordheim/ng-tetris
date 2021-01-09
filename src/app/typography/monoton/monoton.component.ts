import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-monoton',
  template: `<p [ngStyle]="{ 'font-size': size + 'px' }">{{ text }}</p>`,
  styles: [
    `
      p {
        box-sizing: border-box;
        border: 0;
        padding: 0;
        font-family: 'Monoton', cursive;
        font-weight: 400; // only available font-weight for this font
      }
    `,
  ],
})
export class MonotonComponent implements OnInit {
  @Input() text: string = '';
  @Input() size: number = 40;

  constructor() {}

  ngOnInit(): void {}
}
