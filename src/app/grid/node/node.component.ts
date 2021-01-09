import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-node',
  template: `<span>node</span>`,
  styles: [``],
})
export class NodeComponent implements OnInit {
  @Input() row: number;
  @Input() col: number;

  constructor() {}

  ngOnInit(): void {}
}
