import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGiphy, IGiphyResponse } from '../interfaces/giphy.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private _tagsHistory: string[] = [];
  private apiKey: string = '6xcq8XWhWGb2GHhHF95PX9nfHBpOTENQ';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  public gifsList: IGiphy[] = [];

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    const history = localStorage.getItem('history');

    if (!history?.length) return;

    this._tagsHistory = JSON.parse(history);
    this.searchTag(this._tagsHistory[0]);
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    this.removeTag(tag);

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  searchTag(tag: string): void {
    if (!tag?.length) return;

    this.organizeHistory(tag);

    const params = new HttpParams().set('api_key', this.apiKey).set('q', tag).set('limit', 10);

    this.http.get<IGiphyResponse>(`${this.serviceUrl}/search`, { params }).subscribe(response => {
      this.gifsList = response.data;
    });
  }

  searchRandom(): void {
    const params = new HttpParams().set('api_key', this.apiKey).set('limit', 10);

    this.http.get<IGiphyResponse>(`${this.serviceUrl}/trending`, { params }).subscribe(response => {
      console.log(response);
      this.gifsList = response.data;
    });
  }

  removeTag(tag: string): void {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) this._tagsHistory = this._tagsHistory.filter(t => t.toLowerCase() !== tag);

    this.saveLocalStorage();
  }
}
