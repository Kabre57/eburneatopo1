import { Component, OnInit } from '@angular/core';
import { Portfolio } from "src/app/interfaces/portfolio";
import { Mvolaiserv } from "src/app/interfaces/mvolaiserv";
import { Response } from "src/app/interfaces/response";
import { PortoflioService } from "src/app/services/portfolio.service";
import { MovlaiservService } from "src/app/services/movlaiserv.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  services: Mvolaiserv[] = [];
  public portfolios: Portfolio[] = [];

  public searchTerm: string = '';
  searchKey: string = '';

  public filterService: any;

  constructor(
    private mvolaiService: MovlaiservService,
    private portfolioService: PortoflioService,
    
  ) {}

  ngOnInit(): void {
    this.refresh();
    this.portfolioService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  refresh() {
    this.mvolaiService.all().subscribe((res: Response) => {
      this.services = res.data;
    });

    this.portfolioService.all().subscribe((res: Response) => {
      this.portfolios = res.data;
      this.filterService = res.data;
      this.portfolios.forEach((p: any) => {
        this.services.forEach((s: any) => {
          if (p.service === s.id) {
            p.service = s.name;
          }
        });
      });
      // console.log(this.portfolios);
    });
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.portfolioService.search.next(this.searchTerm);
  }

  filter(service: string) {
    this.filterService = this.portfolios
    .filter((p:any) => {
      if (p.service == service || service == '') {
        return p;
      }
    });
  }

}
