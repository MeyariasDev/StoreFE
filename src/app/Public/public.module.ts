import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ViewMoreComponent } from './view-more/view-more.component';
import { AppRoutingModule } from '../app-router';
import { PublicComponent } from './public.component';
import { SharedModule } from '../Shared/shared.module';

@NgModule({
  declarations: [
    PublicComponent,
    ProductComponent,
    HomeComponent,
    ViewMoreComponent
  ],
  imports: [CommonModule,
    AppRoutingModule,
    SharedModule],
  exports: [PublicComponent,
    ProductComponent,
    HomeComponent,
    ViewMoreComponent],
  providers: [],
})
export class PublicModule { }