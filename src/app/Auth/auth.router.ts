import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LogingComponent } from './loging/loging.component';

const routes: Routes = [
    { path: 'loging', component: LogingComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
