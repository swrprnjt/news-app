import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';

import { NewsApiService } from '../news-api/news-api.service';
import { NewsArticle } from '../news-article/news-article';

@Component({
  selector: 'app-news-article-list',
  templateUrl: './news-article-list.component.html',
  styleUrls: ['./news-article-list.component.css']
})
export class NewsArticleListComponent implements OnInit {
  public articles: NewsArticle[];

  constructor(
    private route: ActivatedRoute,
    private newsApiService: NewsApiService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.newsApiService.getVendorById(params.get('id'))
      )
      .subscribe(vendor => {
        if (vendor) {
          this.newsApiService.setVendor(vendor);
          this.getTopArticles(vendor);
        }
      });
  }

  getTopArticles(vendor: string): void {
    if (!vendor) {
      return;
    }

    this.newsApiService
      .getArticles({ source: vendor })
      .then(({ articles }) => (this.articles = articles));
  }
}
