import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar2',
  templateUrl: './search-bar2.component.html',
  styleUrls: ['./search-bar2.component.css']
})
export class SearchBar2Component implements OnInit {

  @Output() submitted = new EventEmitter<string>();

  term = '';

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }

}
