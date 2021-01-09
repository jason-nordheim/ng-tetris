import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  @Input() rows: number = 40;
  @Input() cols: number = 10;

  nodes: any[];

  constructor() {}

  ngOnInit(): void {}
}
