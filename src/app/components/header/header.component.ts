import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';

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
  
  constructor(cartService:CartService, public authService: AuthService, public router:Router) {
    cartService.getCartObservable().subscribe((newCart:any) => {
      this.cartQuantity = newCart.totalCount;
      this.isHome = this.router.url === '/';
      this.isLoggedIn = false;
    })
  }

  logout() {
    this.authService.setIsLoggedIn(false); // تعيين قيمة isLoggedIn إلى false بمجرد تسجيل الخروج بنجاح
    this.router.navigateByUrl('/'); // تحويل المستخدم إلى الصفحة الرئيسية بعد تسجيل الخروج
  }

  ngOnInit(): void {}
}