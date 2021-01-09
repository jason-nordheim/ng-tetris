import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-monoton',
  template: `<p>{{ text }}</p>`,
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');

      .monoton {
        font-family: 'Monoton', cursive;
        font-weight: 400; // only available font-weight for this font
      }
    `,
  ],
})
export class MonotonComponent implements OnInit {
  @Input() text: string = '';
  constructor() {}

  ngOnInit(): void {}
}
