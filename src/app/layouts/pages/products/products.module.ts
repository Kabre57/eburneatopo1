import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductRoutingModule } from './products-routing.module';
import { SingleComponent } from './single/single.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SearchBarComponent } from './side-bar/search-bar/search-bar.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchBar2Component } from './search-results/search-bar2/search-bar2.component';
import { PageListComponent } from './search-results/page-list/page-list.component';



@NgModule({
  declarations: [
    ProductsComponent,
    CategoriesComponent,
    SingleComponent,
    SideBarComponent,
    SearchBarComponent,
    SearchResultsComponent,
    SearchBar2Component,
    PageListComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NgxPaginationModule
  ]
})
export class ProductsModule { }
