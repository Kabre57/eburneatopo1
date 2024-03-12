import { Component, OnInit } from '@angular/core';
import { Mvolaiserv } from 'src/app/interfaces/mvolaiserv';
import { Response } from 'src/app/interfaces/response';
import { MovlaiservService } from "src/app/services/movlaiserv.service";

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent implements OnInit {

  services: Mvolaiserv[] = [];


  constructor(
    private mvolaisService: MovlaiservService,
  ) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
   
    this.mvolaisService.all().subscribe((res: Response) => {
      this.services = res.data;
    });
  }

}
