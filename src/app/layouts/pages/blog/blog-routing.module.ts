import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { BlogComponent } from './blog.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'rechercher', component: SearchResultsComponent },
  { path: ':id', component: BlogSingleComponent },
  { path: 'categories/:id', component: CategoriesComponent },
  { path: 'tags/:id', component: TagsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
