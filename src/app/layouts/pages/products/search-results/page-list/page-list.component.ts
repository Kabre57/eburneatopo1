import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  @Input() products = [];
  @Input() totalItems = null;
  @Input() totalPages = null;
  @Input() currentPage = null;
  @Input() page: (n: number) => void;
  @Input() prev: () => void;
  @Input() next: () => void;

  constructor() { }

  ngOnInit(): void {
  }

  //function to return list of numbers from 0 to n-1
  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
