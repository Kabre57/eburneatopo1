import { Component, OnInit } from '@angular/core';
import { Portfolio } from "src/app/interfaces/portfolio";
import { Mvolaiserv } from "src/app/interfaces/mvolaiserv";
import { Photo } from 'src/app/interfaces/photo';
import { Response } from "src/app/interfaces/response";
import { PortoflioService } from "src/app/services/portfolio.service";
import { MovlaiservService } from "src/app/services/movlaiserv.service";
import { PhotoService } from 'src/app/services/photo.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-portfolio-single',
  templateUrl: './portfolio-single.component.html',
  styleUrls: ['./portfolio-single.component.css']
})
export class PortfolioSingleComponent implements OnInit {

  services: Mvolaiserv[] = [];
  photos: Photo[] = [];
  portfolio: Portfolio;

  constructor(
    private mvolaiService: MovlaiservService,
    private portfolioService: PortoflioService,
    private photoService: PhotoService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    
    console.log(this.services)
    this.mvolaiService.all().subscribe((res: Response) => {
      this.services = res.data;
    });

    this.photoService.all().subscribe((res: Response) => {
      this.photos = res.data;
    });

    this.route.params.subscribe((params) => {
      this.portfolioService.get(params.id).subscribe((res: Response) => {
        this.portfolio = res.data;
      });
    });
  }

}
