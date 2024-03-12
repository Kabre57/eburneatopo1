import { Component, OnInit } from '@angular/core';
import { Category } from "src/app/interfaces/category";
import { Tag } from "src/app/interfaces/tag";
import { Article } from 'src/app/interfaces/article';
import { Photo } from "src/app/interfaces/photo";
import { Response } from 'src/app/interfaces/response';
import { Response2 } from 'src/app/interfaces/response2';
import { ArticleService } from 'src/app/services/article.service';
import { CategoryService } from "src/app/services/category.service";
import { TagService } from "src/app/services/tag.service";
import { PhotoService } from 'src/app/services/photo.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  articles: Article[] = [];
  categories: Category[] = [];
  tags: Tag[] = [];
  photos: Photo[] = [];
  currentPage = 1;
  totalItems: number;
  q: number;
  r: number; 
  totalPages: number;
  keepTerm = '';

  
  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private tagService: TagService,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
   
    this.categoryService.all().subscribe((res: Response) => {
      this.categories = res.data;
    });
    this.tagService.all().subscribe((res: Response) => {
      this.tags = res.data;
    });
    this.photoService.all().subscribe((res: Response) => {
      this.photos = res.data;
    });
    this.articleService.all(this.currentPage).subscribe((res: Response2) => {
      this.articles = res.data;
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

  onTerm(term: string) {
    this.articleService.search(term).subscribe((res: Response2) => {
      console.log(res)
    });
  }

}
