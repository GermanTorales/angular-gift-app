import { Component, Input } from '@angular/core';
import { IGiphy } from '../../interfaces/giphy.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
})
export class GifCardListComponent {
  @Input()
  public gifs: IGiphy[] = [];

  constructor() {}
}
