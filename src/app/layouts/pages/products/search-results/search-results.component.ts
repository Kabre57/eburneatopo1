import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Response2 } from 'src/app/interfaces/response2';
import { Product } from 'src/app/interfaces/product';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {

  products: Product[] = [];
  keepTerm = '';
 currentPage = 1;
  totalItems: number;
  q: number;
  r: number; 
  totalPages: number;
  isActif = false;

  constructor(private productService: ProductService) {}


  ngOnInit(): void {
    if (this.keepTerm === '') {
      return;
    } else {
      this.onTerm(this.keepTerm);
    }
  }

  onTerm(term: string) {
    this.keepTerm = term;
    this.productService.search(term, this.currentPage).subscribe((res: Response2) => {
      this.products = res.data;
      this.totalItems = res.meta.count;
      this.isActif = true;

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
  }

  next = (): void => {
    if (this.currentPage === this.totalPages) {
      return;
    }

    this.currentPage++;
    this.onTerm(this.keepTerm);
    window.scrollTo(0, 0);
  }

  prev = (): void => {
    if (this.currentPage === 1) {
      return;
    }
    this.currentPage--;
    this.onTerm(this.keepTerm);
    window.scrollTo(0, 0);
  }

  //go to new page
  page = (n: number): void => {
    this.currentPage = n;
    this.onTerm(this.keepTerm);
    window.scrollTo(0, 0);
  }

}
