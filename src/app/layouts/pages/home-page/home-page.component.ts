import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { ProductService } from "src/app/services/product.service";
import { Article } from 'src/app/interfaces/article';
import { Portfolio } from "src/app/interfaces/portfolio";
import { Product } from "src/app/interfaces/product";
import { Response2 } from 'src/app/interfaces/response2';
declare let $: any;


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  portfolios: Portfolio[] = [];
  products: Product[] = [];
  articles: Article[] = [];
  currentPage = 1;

  constructor(
    private productService: ProductService,
    private articleService: ArticleService,
  ) { }

  ngOnInit(): void {
    $.getScript('assets/js/revo-custom.js');
    $.getScript('assets/js/partials/05-carousel.js');

    //product
    this.productService.all(this.currentPage).subscribe((res: Response2) => {
      this.products = res.data;
    });

    //artcile
    this.articleService.all(this.currentPage).subscribe((res: Response2) => {
      this.articles = res.data;
    });
  }

}
