import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LogingComponent } from './loging/loging.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: 'login', component: LogingComponent },
    { path: 'register', component: RegisterComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
