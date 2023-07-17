import { Foods } from 'src/app/shared/food';
import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartitem';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart=new Cart()
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { 
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      this.cart = JSON.parse(cartData);
    }
  }
  addToCart(food: Foods): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      this.cart.items.push(new CartItem(food));
    }
  }
  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter(item => item.food.id !== foodId);
  }
  changeQuantity(foodId: number, quantity: number): void {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }
  getCart(): Cart {
    return this.cart;
  }
  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

}
