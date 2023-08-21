import { Component, Input, OnInit } from '@angular/core';

import { IGiphy } from '../../interfaces/giphy.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input()
  public gif!: IGiphy;

  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is required');
  }
}
