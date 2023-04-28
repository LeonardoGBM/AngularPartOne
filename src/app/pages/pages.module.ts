import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [
    ProductComponent,
    DashboardComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
