import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/interfaces/response';
import { Partner } from 'src/app/interfaces/partner';
import { PartnerService } from 'src/app/services/partner.service';
declare let $: any;

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
  partners: Partner[] = [];

  constructor(private partnerService: PartnerService) {
    $.getScript('assets/js/partials/07-tabs.js');
   }

  ngOnInit(): void {
    
    //partner
    this.partnerService.all().subscribe((res: Response) => {
      this.partners = res.data;
    });
  }

}
