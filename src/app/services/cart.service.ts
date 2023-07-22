import { Foods } from 'src/app/shared/food';
import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartitem';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
   cart: Cart = new Cart();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      this.cart = JSON.parse(cartData);
      this.cartSubject.next(this.cart); // update the cartSubject
    }
  }
  addToCart(food: Foods): void {
    let cartItem = this.cart.items.find((item:any) => item.food.id === food.id);
    if (cartItem) {cartItem.quantity++;}
    else {this.cart.items.push(new CartItem(food));}
    localStorage.setItem('cart', JSON.stringify(this.cart)); // update the local storage
    this.cartSubject.next(this.cart); 
  }
  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter(item => item.food.id !== foodId);
    localStorage.setItem('cart', JSON.stringify(this.cart)); // update the local storage
    this.cartSubject.next(this.cart); // update the cartSubject
  }
  changeQuantity(foodId: number, quantity: number): void {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
    localStorage.setItem('cart', JSON.stringify(this.cart)); // update the local storage
    this.cartSubject.next(this.cart); // update the cartSubject
  }
  getCart(): Cart {
    return this.cart;
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }
}
