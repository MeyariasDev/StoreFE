import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { PublicComponent } from './public.component';
import { ViewMoreComponent } from './view-more/view-more.component';

const routes: Routes = [
    {
        path: '', component: PublicComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'product-details/:id', component: ProductComponent },
            { path: 'view-more', component: ViewMoreComponent }

        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule { }
