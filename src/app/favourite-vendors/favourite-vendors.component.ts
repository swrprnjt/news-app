import { Component, OnInit } from '@angular/core';

import { NewsApiService } from './../news-api/news-api.service';

@Component({
  selector: 'app-favourite-vendors',
  templateUrl: './favourite-vendors.component.html',
  styleUrls: ['./favourite-vendors.component.css']
})
export class FavouriteVendorsComponent implements OnInit {
  public favourites: string[] = [];
  public vendor: string;

  constructor(private newsApiService: NewsApiService) {}

  ngOnInit() {
    this.newsApiService
      .getCurrentVendor()
      .subscribe(value => (this.vendor = value));

    this.newsApiService
      .getFavouriteVendors()
      .subscribe(value => (this.favourites = JSON.parse(value)));
  }

  public setVendor(vendor: string): void {
    this.newsApiService.setVendor(vendor);
  }

  public removeFavourite(vendor: string): void {
    this.newsApiService.removeFavourite(vendor);
  }
}
