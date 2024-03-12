import { Component, OnInit } from '@angular/core';
import { Partner } from 'src/app/interfaces/partner';
import { Response } from 'src/app/interfaces/response';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  partners: Partner[] = [];

  constructor(private partnerService: PartnerService) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.partnerService.all().subscribe((res: Response) => {
      this.partners = res.data;
      
    });
  }

}
