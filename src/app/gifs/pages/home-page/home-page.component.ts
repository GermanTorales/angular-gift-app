import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { IGiphy } from '../../interfaces/giphy.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private gifsService: GifsService) {}

  get gifs(): IGiphy[] {
    return this.gifsService.gifsList;
  }
}
