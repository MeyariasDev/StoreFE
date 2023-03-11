import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogingComponent } from './loging/loging.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [LogingComponent],
    imports: [CommonModule, FormsModule],
    exports: [],
    providers: [],
})
export class AunthModule { }