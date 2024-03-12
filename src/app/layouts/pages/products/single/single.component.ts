import { Component, OnInit } from '@angular/core';
import { Product } from "src/app/interfaces/product";
import { Category } from "src/app/interfaces/category";
import { Photo } from 'src/app/interfaces/photo';
import { Response } from "src/app/interfaces/response";
import { ProductService } from "src/app/services/product.service";
import { CategoryService } from "src/app/services/category.service";
import { PhotoService } from 'src/app/services/photo.service';
import { ActivatedRoute } from '@angular/router';
declare let  $: any;

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  categories: Category[] = [];
  photos: Photo[] = [];
  product: Product;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private photoService: PhotoService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    $.getScript('assets/js/main.js');

    this.categoryService.all().subscribe((res: Response) => {
      this.categories = res.data;
    });

    this.photoService.all().subscribe((res: Response) => {
      this.photos = res.data;
    });

    this.route.params.subscribe((params) => {
      this.productService.get(params.id).subscribe((res: Response) => {
        this.product = res.data;
        
      });
    });
  }

}
