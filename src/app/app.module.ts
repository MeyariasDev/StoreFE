import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NpagefoundComponent } from './nopagefound/npagefound/npagefound.component';
import { AppRoutingModule } from './app-router';
import { AunthModule } from './Auth/auth.module';
import { AddProductComponent } from './Private/add-product/add-product.component';
import { HomeComponent } from './Private/home/home.component';
import { PublicModule } from './Public/public.module';


@NgModule({
  declarations: [
    AppComponent,
    NpagefoundComponent,
    AddProductComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AunthModule,
    PublicModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
