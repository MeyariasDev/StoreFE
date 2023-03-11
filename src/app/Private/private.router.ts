import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrivateComponent } from './private.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
    {
        path: 'dashboard', component: PrivateComponent,
        children: [
            { path: 'panel', component: HomeComponent },
            { path: '', redirectTo: '/panel', pathMatch: 'full' },
            { path: 'add-product', component: AddProductComponent },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrivateRoutingModule { }
