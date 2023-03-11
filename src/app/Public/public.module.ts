import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ViewMoreComponent } from './view-more/view-more.component';

@NgModule({
    declarations: [
    ProductComponent,
    HomeComponent,
    ViewMoreComponent
  ],
    imports: [CommonModule],
    exports: [],
    providers: [],
})
export class PublicModule { }