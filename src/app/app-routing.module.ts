import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartpageComponent } from './components/cartpage/cartpage.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'search/:searchItem',component:HomeComponent},
    {path:'tags/:tags',component:HomeComponent},
    {path:'food/:id',component:CartpageComponent},
    {path:'cart',component:CartComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }