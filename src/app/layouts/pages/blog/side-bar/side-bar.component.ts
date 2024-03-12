import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { Tag } from 'src/app/interfaces/tag';
import { Photo } from "src/app/interfaces/photo";
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  @Input('categories') categories: Category = null;
  @Input('tags') tags: Tag = null;
  @Input('photos') photos: Photo = null;
  @Output() submitted = new EventEmitter<string>();

  term = '';
  constructor() {}

  ngOnInit(): void {}

  onFormSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}
