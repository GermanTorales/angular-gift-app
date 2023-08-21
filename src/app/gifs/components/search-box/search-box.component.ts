import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})
export class GifsSearchComponent {
  @ViewChild('searchInputTag')
  public searchInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  searchTag() {
    const newTag = this.searchInput.nativeElement.value;

    this.gifsService.searchTag(newTag);

    this.searchInput.nativeElement.value = '';
  }

  searchRandom(): void {
    this.gifsService.searchRandom();
  }
}
