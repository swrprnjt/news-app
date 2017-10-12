import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NewsArticleListComponent } from './../news-article-list/news-article-list.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'vendor/:id', component: NewsArticleListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRouterModule {}
