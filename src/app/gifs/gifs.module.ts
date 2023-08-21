import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { GifsSearchComponent } from './components/search-box/search-box.component';
import { GifCardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePageComponent,
    GifsSearchComponent,
    GifCardListComponent,
    CardComponent,
  ],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
