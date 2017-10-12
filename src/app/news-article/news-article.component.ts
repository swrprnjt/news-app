import { Component, OnInit, Input } from '@angular/core';
import { NewsArticle } from './news-article';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.css']
})
export class NewsArticleComponent implements OnInit {
  @Input() article: NewsArticle;

  ngOnInit() {}
}
