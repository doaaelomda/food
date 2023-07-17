import { ProfileService } from 'src/app/services/profile-service.service';
import { AuthService } from 'src/app/services/auth.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartpageComponent } from './components/cartpage/cartpage.component';
import { CartComponent } from './components/cart/cart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'search/:searchItem',component:HomeComponent},
    {path:'tags/:tags',component:HomeComponent},
    {path:'food/:id',component:CartpageComponent},
    {path:'cart',component:CartComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }