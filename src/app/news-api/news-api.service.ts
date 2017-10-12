import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { VENDORS } from './news-api.vendors';

@Injectable()
export class NewsApiService {
  private apiUrl = 'https://newsapi.org/v1/';
  private apiKey = '@API_KEY';

  private currentVendor = new BehaviorSubject<string>('bbc-news');
  private favouriteVendors = new BehaviorSubject<string>(
    window.localStorage.getItem('favourites') ||
      `["bbc-news","google-news","espn","techcrunch","ign"]`
  );

  constructor(private http: Http) {}

  public getArticles(params: object): Promise<any> {
    const url = this.apiUrl + 'articles';
    return this.http
      .get(url, this.formatParams(params))
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  public getCurrentVendor(): BehaviorSubject<string> {
    return this.currentVendor;
  }

  public getFavouriteVendors(): BehaviorSubject<string> {
    return this.favouriteVendors;
  }

  public setVendor(vendor: string): void {
    this.currentVendor.next(vendor);
  }

  public getVendors(): Promise<string[]> {
    return Promise.resolve(VENDORS);
  }

  public getVendorById(id: string): Promise<string> {
    return this.getVendors().then(vendors => vendors.find(v => id === v));
  }

  public setFavourite(vendor: string): void {
    const favourites = this.favouriteVendors.value
      ? JSON.parse(this.favouriteVendors.value)
      : JSON.parse(window.localStorage.getItem('favourites'));
    const uniqueFavourites = Array.from(
      new Set((favourites || []).concat([vendor]))
    );

    window.localStorage.setItem('favourites', JSON.stringify(uniqueFavourites));

    this.favouriteVendors.next(window.localStorage.getItem('favourites'));
  }

  public removeFavourite(vendor: string): void {
    const favourites = this.favouriteVendors.value
      ? JSON.parse(this.favouriteVendors.value)
      : JSON.parse(window.localStorage.getItem('favourites'));
    const uniqueFavourites = Array.from(
      new Set((favourites || []).concat([vendor]))
    );

    const index = uniqueFavourites.findIndex(v => v === vendor);
    uniqueFavourites.splice(index, 1);

    window.localStorage.setItem('favourites', JSON.stringify(uniqueFavourites));

    this.favouriteVendors.next(window.localStorage.getItem('favourites'));
  }

  private formatParams(params: object): RequestOptionsArgs {
    return { params: { ...params, apiKey: this.apiKey } };
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
