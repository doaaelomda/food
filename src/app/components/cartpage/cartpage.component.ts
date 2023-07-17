import { CartService } from './../../services/cart.service';
import { FoodService } from './../../services/food/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Foods } from 'src/app/shared/food';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent {
  food!: Foods;
  
  constructor(activatedRoute:ActivatedRoute, 
    foodService:FoodService,private cartService:CartService
    , private router:Router ) {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.food = foodService.getfoodbyid(params['id']);
    })
   }
  onRateChange(rate: number) {
    this.food.star = rate;
  }
  addtocart(){
    this.cartService.addToCart(this.food);
    localStorage.setItem('cart', JSON.stringify(this.cartService.getCart()));
    this.router.navigate(['/cart']);
  }
  
}