import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchBar2Component } from './search-results/search-bar2/search-bar2.component';
import { PageListComponent } from './search-results/page-list/page-list.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    TagsComponent,
    BlogComponent,
    BlogSingleComponent,
    SideBarComponent,
    SearchResultsComponent,
    SearchBar2Component,
    PageListComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    NgxPaginationModule
  ]
})
export class BlogModule { }
