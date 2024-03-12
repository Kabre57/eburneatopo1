import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { Category } from 'src/app/interfaces/category';
import { Response } from 'src/app/interfaces/response';
import { Response2 } from 'src/app/interfaces/response2';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  products: Product[] = [];
  categories: Category[] = [];
  category: Category;
  currentPage = 1;
  totalItems: number;
  q: number;
  r: number; 
  totalPages: number;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.refresh();    
  }

  refresh() {
    this.categoryService.all().subscribe((res: Response) => {
      this.categories = res.data;
    });

    this.route.params.subscribe((params) => {
      this.categoryService.get(params.id).subscribe((res: Response) => {
        this.category = res.data;
        this.productService.categoryFilter(this.category.id, this.currentPage).subscribe((res: Response2) => {
          this.products = res.data;
          this.totalItems = res.meta.count;
          
          //recoit le quotient de la division totalItem:sizePage
          this.q = Math.floor(this.totalItems / 10);

          //recoit le reste de la division totalItem:sizePage
          this.r = (this.totalItems % 10);

          //si le reste est suppérieur à 1 ou égale à 1
          if (this.r > 1 || this.r == 1) {
            //totalPages reçoit le quotien plus 1
            return (this.totalPages = this.q + 1);
          } else {
            //sinon totalPages reçoit que le quotien
            return (this.totalPages = this.q);
          }
        });
      });
    });
  }

  next(): void {
    if (this.currentPage === this.totalPages) {
      return;
    }

    this.currentPage++;
    this.refresh();
    window.scrollTo(0, 0);
  }

  prev(): void {
    if (this.currentPage === 1) {
      return;
    }
    this.currentPage--;
    this.refresh();
    window.scrollTo(0, 0);
  }

  //go to new page
  page(n: number) {
    this.currentPage = n;
    this.refresh();
    window.scrollTo(0, 0);
  }

  //function to return list of numbers from 0 to n-1
  numSequence(n: number): Array<number> {
    return Array(n);
  }

  

}
