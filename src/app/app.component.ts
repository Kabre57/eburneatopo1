import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
declare let ckav, pageLoader,$window, $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    Location, {
        provide: LocationStrategy,
        useClass: PathLocationStrategy
    }
]
})
export class AppComponent {
  location: any;
  routerSubscription: any;

  constructor(private router: Router) {
    
  }

  ngOnInit() {
    this.recallJsFuntions();
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement("script");
    script.innerHTML = "";
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  recallJsFuntions() {
    this.router.events
    .subscribe((event) => {
        if ( event instanceof NavigationStart ) {
          
        }
    });
    this.routerSubscription = this.router.events
    .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
    .subscribe(event => {
      this.loadScript("assets/js/main.js");
        
        
        this.location = this.router.url;
        if (!(event instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0);
    });
}
}
