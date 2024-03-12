import { Component, OnInit, Input } from '@angular/core';
import { Category } from "src/app/interfaces/category";
import { Tag } from "src/app/interfaces/tag";
import { CategoryService } from "src/app/services/category.service";
import { TagService } from "src/app/services/tag.service";
import { Response } from 'src/app/interfaces/response';


@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  @Input() articles = [];
  @Input() totalItems = null;
  @Input() totalPages = null;
  @Input() currentPage = null;
  @Input() page: (n: number) => void;
  @Input() prev: () => void;
  @Input() next: () => void;

  categories: Category[] = [];
  tags: Tag[] = [];

  constructor(
    private categoryService: CategoryService,
    private tagService: TagService,
  ) { }

  ngOnInit(): void {
    this.categoryService.all().subscribe((res: Response) => {
      this.categories = res.data;
    });
    this.tagService.all().subscribe((res: Response) => {
      this.tags = res.data;
    });
  }

  //function to return list of numbers from 0 to n-1
  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
