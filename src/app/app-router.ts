import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NpagefoundComponent } from './nopagefound/npagefound/npagefound.component';
import { AuthRoutingModule } from './Auth/auth.router';
import { PrivateRoutingModule } from './Private/private.router';
import { PublicRoutingModule } from './Public/public.router';

const routes: Routes = [
    { path: '**', component: NpagefoundComponent },];

@NgModule({
    imports: [RouterModule.forRoot(routes),
        AuthRoutingModule,
        PrivateRoutingModule,
        PublicRoutingModule,
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
