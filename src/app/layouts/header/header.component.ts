import { Component } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpen = false;

  constructor() {}

  ngOnInit(): void {}

  clickEvent() {
    this.isOpen = !this.isOpen;
    $('a[data-toggle="tab"]').click(function(){
      // todo remove snippet on bootstrap v4
      $('a[data-toggle="tab"]').click(function() {
        $($(this).attr('href')).show().addClass('show active').siblings().hide();
      })
    });
  }
}