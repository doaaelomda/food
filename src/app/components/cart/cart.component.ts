import { Component } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart';
import { CartItem } from 'src/app/shared/models/cartitem';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.setCart();
  }
  setCart() {
    this.cart = this.cartService.getCart();
  }
  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.cart.totalCount = this.cart.items.reduce((acc, item) => acc + item.quantity, 0);
  }
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.cart.totalCount = this.cart.items.reduce((acc, item) => acc + item.quantity, 0);
  }
}