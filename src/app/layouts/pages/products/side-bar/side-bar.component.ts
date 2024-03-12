import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Input('categories') categories: Category = null;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onTerm(term: string) {
    this.productService.search(term).subscribe(response => {
      console.log(response)
    });
  }

}
