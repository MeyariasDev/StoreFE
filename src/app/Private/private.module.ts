import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { PrivateComponent } from './private.component';
import { AppRoutingModule } from '../app-router';
import { SharedModule } from '../Shared/shared.module';

@NgModule({
    declarations: [
        AddProductComponent,
        HomeComponent,
        PrivateComponent],
    imports: [
        CommonModule,
        AppRoutingModule,
        SharedModule
    ],
    exports: [
        PrivateComponent,
        HomeComponent,
        AddProductComponent],
    providers: [],
})
export class PrivateModule { }