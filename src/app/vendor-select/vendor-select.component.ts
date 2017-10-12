import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { NewsApiService } from '../news-api/news-api.service';

@Component({
  selector: 'app-vendor-select',
  templateUrl: './vendor-select.component.html',
  styleUrls: ['./vendor-select.component.css']
})
export class VendorSelectComponent implements OnInit {
  public vendor: string;
  public vendors: string[];

  constructor(private router: Router, private newsApiService: NewsApiService) {}

  ngOnInit() {
    this.newsApiService.getCurrentVendor().subscribe(value => {
      this.vendor = value;
      if (value) {
        this.router.navigate(['/vendor', value]);
      }
    });

    this.newsApiService.getVendors().then(vendors => (this.vendors = vendors));
  }

  public setVendor(vendor: string): void {
    this.newsApiService.setVendor(vendor);
  }

  public setFavourite(vendor: string): void {
    this.newsApiService.setFavourite(vendor);
  }
}
