import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioSingleComponent } from './portfolio-single/portfolio-single.component';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    PortfolioComponent,
    FilterPipe,
    PortfolioSingleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
