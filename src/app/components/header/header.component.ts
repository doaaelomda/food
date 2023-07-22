import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartQuantity=0
  isHome: boolean | undefined ;
  isLoggedIn: boolean=false;
  isLogin:boolean = false;
  
  constructor(cartService:CartService, public router:Router) {
    cartService.getCartObservable().subscribe((newCart:any) => {
      this.cartQuantity = newCart.totalCount;
      this.isHome = this.router.url === '/';
      this.isLoggedIn = false;
    })
  }
  ngOnInit(): void {}
}