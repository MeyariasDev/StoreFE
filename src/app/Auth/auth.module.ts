import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogingComponent } from './loging/loging.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from '../app-router';

@NgModule({
    declarations: [LogingComponent, RegisterComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
    exports: [],
    providers: [],
})
export class AunthModule { }