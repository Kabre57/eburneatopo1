import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'rechercher', component: SearchResultsComponent },
  { path: ':id', component: SingleComponent },
  { path: 'categories/:id', component: CategoriesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
