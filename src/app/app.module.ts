import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NpagefoundComponent } from './nopagefound/npagefound/npagefound.component';
import { AppRoutingModule } from './app-router';
import { AunthModule } from './Auth/auth.module';
import { PublicModule } from './Public/public.module';
import { PrivateModule } from './Private/private.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NpagefoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AunthModule,
    PublicModule,
    PrivateModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
