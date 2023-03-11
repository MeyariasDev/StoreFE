import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NpagefoundComponent } from './nopagefound/npagefound/npagefound.component';
import { AppRoutingModule } from './app-router';
import { AunthModule } from './Auth/auth.module';
import { CardComponent } from './Public/card/card.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { SidebarComponent } from './Shared/sidebar/sidebar.component';

import { AddProductComponent } from './Private/add-product/add-product.component';
import { PublicComponent } from './Public/public.component';
import { PrivateComponent } from './Private/private.component';
import { HomeComponent } from './Private/home/home.component';






@NgModule({
  declarations: [
    AppComponent,
    NpagefoundComponent,
    CardComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    PublicComponent,
    PrivateComponent,
    AddProductComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AunthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
