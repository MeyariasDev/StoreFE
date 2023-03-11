import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { PrivateComponent } from './private.component';
import { AppRoutingModule } from '../app-router';

@NgModule({
    declarations: [
        AddProductComponent,
        HomeComponent,
        PrivateComponent],
    imports: [
        CommonModule,
        AppRoutingModule],
    exports: [
        PrivateComponent,
        HomeComponent],
    providers: [],
})
export class PrivateModule { }