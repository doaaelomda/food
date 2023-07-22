import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart';
import { CartItem } from 'src/app/shared/models/cartitem';
import { CartService } from './../../services/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CurrencyPipe]
})
export class CartComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService) { }
  ngOnInit() {
    this.setCart();
  }
  setCart() {
    this.cart = this.cartService.getCart();
  }
  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.updateCart();
  }
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.updateCart();
  }
  updateCart() {
    this.setCart();
    this.cart.totalCount = this.cart.items.reduce((acc, item) => acc + item.quantity, 0);
  }
  done() {
    const classes = 'alert alert-warning';
    const message = 'Your Order are Done !';
    // Create new div element
    const newDiv = document.createElement('div');
    newDiv.textContent = message;
    newDiv.classList.add(...classes.split(' '));
    // Add new div to the page
    document.body.appendChild(newDiv);
    
  }
}


