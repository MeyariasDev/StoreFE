import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        CardComponent,
        FooterComponent,
        NavbarComponent,
        SidebarComponent],
    imports: [CommonModule, FormsModule, BrowserModule],
    exports: [
        CardComponent,
        FooterComponent,
        NavbarComponent,
        SidebarComponent
    ],
    providers: [],
})
export class SharedModule { }