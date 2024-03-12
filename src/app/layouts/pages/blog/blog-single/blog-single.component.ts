import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/interfaces/article';
import { Category } from 'src/app/interfaces/category';
import { Response } from 'src/app/interfaces/response';
import { Tag } from 'src/app/interfaces/tag';
import { Photo } from 'src/app/interfaces/photo';
import { ArticleService } from 'src/app/services/article.service';
import { CategoryService } from 'src/app/services/category.service';
import { TagService } from 'src/app/services/tag.service';
import { PhotoService } from 'src/app/services/photo.service';


@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.css']
})
export class BlogSingleComponent implements OnInit {

  article: Article;
  categories: Category[] = [];
  tags: Tag[] = [];
  photos: Photo[] = [];

  constructor(
    private categoryService: CategoryService,
    private tagService: TagService,
    private articleService: ArticleService,
    private photoService: PhotoService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.photoService.all().subscribe((res: Response) => {
      this.photos = res.data;
    });

    this.categoryService.all().subscribe((res: Response) => {
      this.categories = res.data;
    });

    this.tagService.all().subscribe((res: Response) => {
      this.tags = res.data;
    });

    this.route.params.subscribe((params) => {
      this.articleService.get(params.id).subscribe((res: Response) => {
        this.article = res.data;
      });
    });
  }

}
