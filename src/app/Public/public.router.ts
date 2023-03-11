import { Routes, RouterModule } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { PublicComponent } from './public.component';
import { ViewMoreComponent } from './view-more/view-more.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
    {
        path: '', component: PublicComponent,
        children: [
            { path: 'home', component: CardComponent },
            // { path: 'home', component: HomeComponent },
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'product', component: ProductComponent },

            { path: 'view-more', component: ViewMoreComponent }

        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule { }
