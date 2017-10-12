import { AsTitlePipe } from './pipes/as-title.pipe';
import { NewsApiService } from './news-api/news-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router/app-router.module';
import { SanitizeUrlPipe } from './pipes/sanitize-url.pipe';
import { NewsArticleComponent } from './news-article/news-article.component';
import { NewsArticleListComponent } from './news-article-list/news-article-list.component';
import { VendorSelectComponent } from './vendor-select/vendor-select.component';
import { FavouriteVendorsComponent } from './favourite-vendors/favourite-vendors.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsArticleComponent,
    NewsArticleListComponent,
    VendorSelectComponent,
    SanitizeUrlPipe,
    AsTitlePipe,
    FavouriteVendorsComponent
  ],
  imports: [BrowserModule, HttpModule, AppRouterModule],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
